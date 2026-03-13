import { useState, useEffect, use } from 'react';
import { footballApi } from '../services/Api';
 

export function useLeagues() {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    

    useEffect(() => {
        async function loadLeagues() {
            try {
                setLoading(true);
                const rawData = await footballApi.getLeagues();
                if (!rawData) {
                    throw new Error('Пустой ответ от API');
                }
                    const leaguesList = rawData.competitions.map(leagues => ({
                        id: leagues.id,
                        area: leagues.area.name,
                        name: leagues.name,
                        emblem: leagues.emblem
                    }))
                setLeagues(leaguesList);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        } loadLeagues()
    }, []);
    return { leagues, loading, error };
}

export default useLeagues