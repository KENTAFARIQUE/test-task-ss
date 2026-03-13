import { useState, useEffect, use } from 'react';
import { footballApi } from '../services/Api';
 

export function useTeams() {
    const [teams, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    

    useEffect(() => {
        async function loadTeams() {
            try {
                setLoading(true);
                const rawData = await footballApi.getTeams();
                if (!rawData) {
                    throw new Error('Пустой ответ от API');
                }
                    const teamsList = rawData.teams.map(teams => ({
                        id: teams.id,
                        name: teams.name,
                        crest: teams.crest
                    }))
                setLeagues(teamsList);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        } loadTeams()
    }, []);
    return { teams, loading, error };
}

export default useTeams