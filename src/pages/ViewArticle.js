import React,{useState, useEffect} from "react";
import {formatDate} from '../utils/date';
import Container from "react-bootstrap/Container";
import { toast } from 'react-toastify';
const ViewArticle= ({ match } ) => {
  const { id } = match.params;
  console.log(id);
  const [article,setArticle]=useState({});
  useEffect(() =>{
      fetch('http://localhost:3001/api/article?id=' +id)
     .then ((result) => {
      return result.json();
     })
.then (({status,article}) => {
      if (status==="ok"){
        setArticle(article);
      }
      else {
        toast.error("mistake");
      }
   })
.catch((error) => {
    toast.error("mistake");
      console.log(error);
  })
    }, [])
    return (
        <Container>
            <h1> {article.title} </h1>
            <p>
               {article.content}
            </p>
             <p>
             posté le {formatDate(new Date())}<br />
             par {article.authorFirstname} {article.authorLastname}
            </p>
            <div>
                COMMENTAIRES
            </div>
        </Container>
      );
};
export default ViewArticle;