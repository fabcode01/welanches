import { useState } from "react"


export const useFetchCep = (cep)=>{
    const baseurl = `https://viacep.com.br/ws/${cep}/json/`

    const[logradouro, setLogradouro] = useState('')
    const[bairro, setBairro] = useState('')
    const[localidade, setLocalidade] = useState('')
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(null)

   const fetchCep = async()=>{
      
        try{
            setLoading(true)
            const response = await fetch(baseurl)
            const data = await response.json()
    
            if(data.erro == true){
                setError('O CEP informado não existe')
                
            } else {
                setError(null)

                setLogradouro(data.logradouro)
                setBairro(data.bairro)
                setLocalidade(data.localidade)
            }

            
            setLoading(false)
        }catch(error){
           
          
        } 
    }

    return {fetchCep, error, logradouro, bairro, localidade, loading}
}



