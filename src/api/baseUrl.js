export default function getBaseUrl(){
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name,url){
    if(!url){
        url = window.location.href;
        return url.indexOf('useMockApi') !== -1 
    }
    
}