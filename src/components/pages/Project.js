import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Project(){
    const { id } = useParams()

    const [project, setproject] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(resp => resp.json())
      .then((data) => {setproject(data)})
      .catch(err => console.log(err))
    }, [id])
    return(<p>{project.name}</p>)
}

export default Project