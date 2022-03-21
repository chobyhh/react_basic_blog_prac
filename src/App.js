import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, title_change] = useState(['HTML/CSS', 'Java Script', 'React'])
  let [desc, desc_c] = useState(['뼈대와 디자인', '동작', '라이브러리'])
  let [days, days_c] = useState(['2022년 3월 19일', '2022년 3월 20일', '2022년 3월 21일'])
  let [like_n, like_c] = useState([0,0,0])
  let [click, click_c] = useState(false)
  let [idx, idx_c] = useState(0)
  let [t_inp, t_inp_c] = useState([])
  let [d_inp, d_inp_c] = useState([])
  let [de_inp, de_inp_c] = useState([])
  

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발질 Blog</div>
      </div>

      {/* <button onClick={()=>{title_change(['java'])}}>버른</button> */}


      {
        title.map(function(a, i){
          return(
            <div><div className='list' key={i}>
            <h3 onClick={()=>{click_c(!click); idx_c(i)}}> {a}</h3>
              <p> {desc[i]} <span onClick={()=>{let copy = [...like_n]; copy[i]++; like_c(copy)}}> 👍</span> {like_n[i]} </p>
            <hr />
          </div></div>
          )
        })
        
      }

      


      {
        click === true ? <Modal title={title} days={days} desc={desc} idx={idx}/> : null
      }

      <div className='publish'>
        
        <input placeholder='Title' onChange={(e)=>{t_inp_c(e.target.value)}}/> 
        <input placeholder='Date' onChange={(e)=>{d_inp_c(e.target.value)}}/>
        <input placeholder='Description' style={{height:'100px', textAlign:'high'}} onChange={(e)=>{de_inp_c(e.target.value)}}></input>        <button onClick={()=>{
          var arrayCopy = [...title]
          arrayCopy.push(t_inp)
          title_change(arrayCopy)
          
          var arrayCopy2 = [...days]
          arrayCopy2.push(d_inp)
          days_c(arrayCopy2)

          var arrayCopy3 = [...desc]
          arrayCopy3.push(de_inp)
          desc_c(arrayCopy3)

          ;}}>
          글 작성
        </button>
      </div>

    </div>
  );
}

function Modal(props, 
  
  
  
  i){
  return(
    <div className='modal'>
      <h2>{props.title[props.idx]}</h2>
      <p>{props.days[props.idx]}</p>
      <p>{props.desc[props.idx]}</p>
    </div>
  )
}



export default App;
