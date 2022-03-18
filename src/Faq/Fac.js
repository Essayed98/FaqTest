import React, { useState, useEffect } from 'react'
import MyFaq from './MyFaq';
import axios from 'axios';

const Fac = () => {
  
    const [questions, setQuestions] = useState([])
    
      useEffect(() =>{
      
            axios.get(`https://my-json-server.typicode.com/Essayed98/FaqTest/FaqQuestion`)
              .then(res => {
                setQuestions(res.data);
                
              })
            })

    return (
        <main>
            <div className='container'>
                <img src={require('../assets/téléchargement.png')} />
                <section className='info'>
                    {questions.map((question) => (
                        <MyFaq key={question.id} {...question} />
                    ))}
                </section>
            </div>
        </main>
    )
}

export default Fac