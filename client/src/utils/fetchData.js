export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '684263451amshf40637707ab3dccp14ec2ajsnb82525d797fa',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '684263451amshf40637707ab3dccp14ec2ajsnb82525d797fa',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};