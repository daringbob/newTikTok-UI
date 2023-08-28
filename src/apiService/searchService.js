import * as requests from "src/utils/request"


export const search = async (q,type = 'less') => {
    try {
        const res = await requests.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

