import React, { useState } from 'react';
import './faq.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'



const Faq = ({question , answer}) => {
    const [data, setdata] = useState(false);
    return (
        <article className='question'>
          <header>
            <h4 onClick={() => setdata(!data)} className='question-title'>
              {question}
            </h4>
            <button className='btn' onClick={() => setdata(!data)}>
              {data ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </header>
          {data && <p>{answer}</p>}
        </article>
      )
    }

export default Faq