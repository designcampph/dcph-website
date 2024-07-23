import React,{useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom';
import Quiz from '../Data/quizCourse.json'
import supabase from '../../supabase';

const QuizCourse = (props) => {

  const location = useLocation()
  const user = location.state.user
  const title = location.state.title
  const id = location.state.id

  const[userQuiz,setuserQuiz] = useState(0)
  const[answer1,setAnswer1] = useState(0)
  const[answer2,setAnswer2] = useState(0)
  const[answer3,setAnswer3] = useState(0)
  const[answer4,setAnswer4] = useState(0)
  const[answer5,setAnswer5] = useState(0)
  const[answer6,setAnswer6] = useState(0)
  const[answer7,setAnswer7] = useState(0)
  const[answer8,setAnswer8] = useState(0)
  const[answer9,setAnswer9] = useState(0)
  const[answer10,setAnswer10] = useState(0)
  const[score,setScore] = useState(0)
  const[next,setNext] = useState(1)

  const submitBtn = async () => {

    if (score>8){
      const { data, error } = await supabase
      .from('Courses')
      .update({percent: 100})
      .eq('id', id)
      .select()
    } else {
      const { data, error } = await supabase
      .from('Courses')
      .update({percent: 90})
      .eq('id', id)
      .select()
    }
  
  }


  useEffect(()=>{

    if (title === "Elements of Design"){
      setuserQuiz(1)
    } else if (title === "Intro to Illustrator"){
      setuserQuiz(2)
    } else if (title === "Google Workspace"){
      setuserQuiz(3)
    }
},[])


  const filterData = Quiz.filter(quizData=>
    quizData.id === userQuiz
  );

  return (
    filterData.map( (quizData,index) => {
      return(
        <div key={quizData.id}>

          { next == 1 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q1}</h1>
              <button onClick={(e)=>{setAnswer1(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O1A}</button><br/>
              <button onClick={(e)=>{setAnswer1(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O1B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A1 == answer1){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }

          { next == 2 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q2}</h1>
              <button onClick={(e)=>{setAnswer2(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O2A}</button><br/>
              <button onClick={(e)=>{setAnswer2(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O2B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A2 == answer2){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }

          { next == 3 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q3}</h1>
              <button onClick={(e)=>{setAnswer3(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O3A}</button><br/>
              <button onClick={(e)=>{setAnswer3(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O3B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A3 == answer3){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }

          { next == 4 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q4}</h1>
              <button onClick={(e)=>{setAnswer4(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O4A}</button><br/>
              <button onClick={(e)=>{setAnswer4(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O4B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A4 == answer4){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }

          { next == 5 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q5}</h1>
              <button onClick={(e)=>{setAnswer5(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O5A}</button><br/>
              <button onClick={(e)=>{setAnswer5(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O5B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A5 == answer5){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }

          { next == 6 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q6}</h1>
              <button onClick={(e)=>{setAnswer6(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O6A}</button><br/>
              <button onClick={(e)=>{setAnswer6(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O6B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A6 == answer6){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }

          { next == 7 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q7}</h1>
              <button onClick={(e)=>{setAnswer7(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O7A}</button><br/>
              <button onClick={(e)=>{setAnswer7(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O7B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A7 == answer7){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }


          { next == 8 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q8}</h1>
              <button onClick={(e)=>{setAnswer8(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O8A}</button><br/>
              <button onClick={(e)=>{setAnswer8(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O8B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A8 == answer8){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }

          { next == 9 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q9}</h1>
              <button onClick={(e)=>{setAnswer9(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O9A}</button><br/>
              <button onClick={(e)=>{setAnswer9(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O9B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A9 == answer9){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }


          { next == 10 ?
          <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
            <h1 className='pb-4 text-lg'>{quizData.Q10}</h1>
              <button onClick={(e)=>{setAnswer10(1)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O10A}</button><br/>
              <button onClick={(e)=>{setAnswer10(2)}} className='w-80 bg-green-400 text-white rounded-full text-center p-2 mb-4 hover:bg-orange-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-600'>{quizData.O10B}</button><br/>
              <button className='bg-gray-400 text-white p-2 mt-4 hover:bg-black'
              onClick={(e)=>
                {if (quizData.A10 == answer10){setScore(score + 1)} else{setScore(score + 0)} setNext(next+1)}
              }
              >Next</button>
          </div> 
          :
          null
          }
          

          { next == 11 ?
          
            <div className='border-black border-4 p-8 ml-[30%] mt-[10%] w-[40%] h-[72] text-center'>
              { score>3 ? <h1 className='text-5xl text-green-400'>Passed</h1> : <h1 className='text-5xl text-red-500'>Failed!</h1>}
              <h3 className='text-2xl mt-4'>Hello {user}, Your score is {score}</h3>
              <h5>We have a lot of Courses to choose from! Start Learning Today!</h5>
              <button onClick={submitBtn} className='text-black bg-gray-400 border-gray-400 drop-shadow-xl pt-1 p-2 mt-4 rounded-full w-72 h-8 hover:bg-orange-400'><Link to='/dashboard'>Submit!</Link></button>
            </div>
            :
            null
          }
  
        </div>
      )
    })
  )
}

export default QuizCourse