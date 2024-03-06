import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import QuoteCard from '../component/QuoteCard'
import './QuoteScreen.css'


const QuoteScreen = () => {

    const quoteData = [{

        "description":"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
        "author":"Adam Scott"
    },
    {
        "description":"Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
        "author":"Adelle Davis"
    },
    {
        "description":"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
        "author":"Adelle Davis"
    },
    {
        "description":"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
        "author":"Albert Einstein"
    },
    {
        "description":"Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
        "author":"Alice May Brock"
    },
    {
        "description":"Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.  Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
        "author":"Anthelme Brillat-Savarin"
    },
    {
        "description":"Tell me what you eat, and I will tell you what you are.",
        "author":"Cyra McFadden"
    },
    {
        "description":"Health food makes me sick.",
        "author":"Eike von Repkow"
    },
    {
        "description":"I no longer prepare food or drink with more than one ingredient.",
        "author":"Epictetus"
    },
    {
        "description":"Eating is really one of your indoor sports. You play three times a day, and it's well worth while to make the game as pleasant as possible.",
        "author":"Fran Lebowitz"
    },
]
  return (
        <>
          <Navbar/>
            <section className='quote-section'>
                {
                    quoteData.map((ele, index) =>{
                            return (
                                <QuoteCard description={ele.description}
                                                author={ele.author} 
                                                key={index}
                                                />
                           )
                    })
                }

                
            </section>
            
            {/* <p>This is Quote Svreen</p> */}
            <Footer/>
        </>
  )
}

export default QuoteScreen
