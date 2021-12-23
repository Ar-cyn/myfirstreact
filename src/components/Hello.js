import { useEffect, useState } from "react";
import helloService from "../services/helloservice"


const Hello = () =>{

    //hooks
    const [hello, setHello] = useState([])

    //hooks
    useEffect(() => {
        helloService.getHello()
        .then(
        response => {
            setHello(response.data);
        }
        )
    })

    return hello;
}

export default Hello;