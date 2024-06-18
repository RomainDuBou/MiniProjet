import React, { useEffect, useState } from 'react'
import FeedCard from '../../components/cards/FeedCard'
import { UserApi } from '../../api/UserApi'
import { Button, message } from 'antd'

function Questions() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    getMyQuestions()
  }, [])

  const getMyQuestions = () => {
    UserApi.getMyQuestions().then((response)=> {
      setQuestions(response.data.data)
      message.success("Données chargées")
    }).catch((error) => {
      message.error("Une erreur est survenue")
    });
  }
  return (
    <section className='feed-page'>
    {
     questions.map((item) => (
       <FeedCard item={item} key={item.id} />
     ))
    }
  </section>
  )
}

export default Questions
