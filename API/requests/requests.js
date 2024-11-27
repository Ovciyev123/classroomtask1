export async function getDatas(url){
let datas
let error

await axios.get(url)
.then(res=>datas=res.data)
.catch(err=>error=err)

return{
datas,error
}
}


export async function postData(url,obj){
    let onedata
    let error
    
    await axios.post(url,obj)
    .then(res=>onedata=res.data)
    .catch(err=>error=err)
    
    return{
    onedata,error
    }
    }

    export async function getDataId(url,id){
        let data
        let error
        
        await axios.get(url+"/"+id)
        .then(res=>data=res.data)
        .catch(err=>error=err)
        
        return{
        data,error
        }
        }
        