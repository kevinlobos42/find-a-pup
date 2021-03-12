import React, {useState} from 'react'
import {InputGroup , Button, Card} from  'react-bootstrap'
import '../css/Search.css'

const Search = ({breeds}) =>{
    const [results,setResults]=useState([]);
    // BREED LIST
    let breed_list=[];
    for(const key in breeds){
        breed_list.push(key);
    }
    breed_list.sort();
    // SUB BREED LIST
    let sub_breeds=[]
    breed_list.forEach(breed=>{
        if(breeds[breed].length>1){
            breeds[breed].forEach(b=>sub_breeds.push(b))           
        }
    })
    const handleChange = ev=>{
        if(ev.target.value==="Select Breed"){
            return;
        }
        const subs = document.getElementById("sub-breeds")
        subs.innerHTML=""
        let val = ev.target.value
        if(breeds[val].length>0){

            breeds[val].forEach(b=>{
                const option = document.createElement('option')
                option.innerHTML=`${b}`
                subs.append(option)    
            })       
        }else{
            const option = document.createElement('option')
            option.innerHTML="No option"
            subs.append(option)
        }
    }
    const searchImg = ()=>{
       const b = document.getElementById("breeds");
       const sb = document.getElementById("sub-breeds");
           if( b.value==="Select Breed") {
               alert("PLEASE SELECT BREED")
           }else{
               if(sb.value!=="No option"){
                    getImages(b.value+"/"+sb.value)
               }else getImages(b.value)
           }

    }

    const getImages= async (query)=>{
        const link=`https://dog.ceo/api/breed/${query}/images/random/5`
        const response = await fetch(link)
        const data = await response.json();
        setResults(data.message)
        console.log(results)
    }
        
    return(
        <div className="container container-search">
        <InputGroup id="search">
            <select
                id="breeds"
                as={InputGroup.Prepend}
                default="Dropdown"
                onChange={handleChange} 
                >
                <option selected="selected">Select Breed</option>
                {breed_list.map(breed=>(
                    <option
                    value={breed}>{breed}</option>
                    ))} 
            </select>
            <select
                as={InputGroup.Prepend}
                id="sub-breeds"
                default="Dropdown"
                >
                <option selected="selected">No option</option>
            </select>
            <InputGroup.Append>
                <Button
                size="lg"
                onClick={searchImg}>Search</Button>
            </InputGroup.Append>
        </InputGroup>
        {results.map(res=>
            (
                <Card
                className="card"
                image={res}
                >
                    <Card.Img src={res}></Card.Img>
                    <Card.Body>
                        <Card.Title className="card-title">{res.split('/')[4].replace('-',' ')}</Card.Title> 
                    </Card.Body>
                </Card>

))}
        </div>
    )
}

export default Search