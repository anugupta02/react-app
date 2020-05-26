import React, { useState,forwardRef } from 'react'; 
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
import './App.css';
import Modal from 'react-modal';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import CountUp , {useCountUp} from 'react-countup'
import IdleTimerContainer from './IdleTimerContainer';
import {ChromePicker} from 'react-color'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

 
Modal.setAppElement('#root')


// const CustomToast = ({closeToast}) => {
//   return(
//     <div>
//     Something went wrong!
//     <button onClick={closeToast}>Close</button>
//     </div>
//   )
// }


const ColoredToolTip = () => {
  return <span style={{color: 'yellow'}}>Anu Gupta</span>
}

const CustomChild = forwardRef((props, ref) => {
  return(
    <div ref={ref}>
    <div>First Line</div>
    <div> Second Line</div>
    </div>
  )
})


// toast.configure()
  function App() {
     
const {countUp, start, pauseResume, reset, update}  = useCountUp({
  duration:5, 
  end:10000,
  startOnMount: false
})

 const[modalIsOpen, setModalIsOpen] = useState(false) 
 const[color, setColor] = useState('#fff')
 const[showColorPicker, setshowColorPicker] = useState(false) 


 const[number, setNumber] = useState('')
 const[name, setName] = useState('')
 const[expiry, setExpiry] = useState('')
 const[cvc, setCvc] = useState('')
 const[focus, setFocus] = useState('')

 const[selectedDate,setselectedDate] = useState(null)

    // const notify = () =>{
    //   toast('Basic notification',{
    //     position:toast.POSITION.TOP_LEFT
    //   })
    //   toast.success('Success notification',{
    //     position:toast.POSITION.TOP_CENTER,
    //     autoClose: 8000
    //   })
    //   toast.info('Info notification',{
    //     position:toast.POSITION.TOP_RIGHT,
    //     autoClose: false
    //   })
    //   toast.warn(<CustomToast/>,{
    //     position:toast.POSITION.BOTTOM_LEFT
    //   })
    //   toast.error('Error notification',{
    //     position:toast.POSITION.BOTTOM_CENTER})
    //   toast('Basic notification',{position:toast.POSITION.BOTTOM_RIGHT})
    // }<button onClick={notify}>Notify!</button>



// <h1>
// <CountUp end ={200}/>
// <br/><br/>
// <CountUp end ={200} duration={5}/>
// <br/><br/>
// <CountUp start={500} end ={1000} duration={5}/>
// <br/><br/>
// <CountUp end ={1000} duration={5} prefix='$' decimals={2} />
// <br/><br/>
// <CountUp end ={1000} duration={5} suffix='USD' decimals={2} />
// </h1>

//
//<IdleTimerContainer></IdleTimerContainer>
 
  return ( 
    <div className="App">
    <Cards
    number={number}
    name={name}
    expiry={expiry}
    cvc={cvc}
    focused={focus}
    />

    <button onClick={() => setModalIsOpen(true)}>Open modal</button>
    <Modal isOpen={modalIsOpen}
    shouldCloseOnOverlayClick={false}
    onRequestClose={() => setModalIsOpen(false)}
    style={
      {
      overlay: {
        backgroundColor: 'grey'
      },
       content:{
          color: 'orange'
        }
    }}>

    <h2>Modal Title</h2>
    <p>Modal Body</p>
  <div>
     <button onClick={() => setModalIsOpen(false)}>Close</button>      
   </div>
  </Modal>

  <div style={{ paddingBottom: '20px' }}>
  <Tippy arrow={false} delay={1000} placement='right' content = 'Basic ToolTip'>
  <button>Hover</button>
  </Tippy>
  </div>

  <div style={{ paddingBottom: '20px' }}>
  <Tippy content = {<span style={{color: 'orange'}}>Akash Gupta</span>}>
  <button>Hover</button>
  </Tippy>
  </div>

  <div style={{ paddingBottom: '20px' }}>
  <Tippy content = {<ColoredToolTip></ColoredToolTip>}>
  <button>Hover</button>
  </Tippy>
  </div>

  <div style={{ paddingBottom: '20px' }}>
  <Tippy placement='top-start' content = {<ColoredToolTip></ColoredToolTip>}>
  <CustomChild></CustomChild>
  </Tippy>
  </div>


<div>
<h1>{countUp}</h1>
<button onClick={start}>Start</button>
<button onClick={reset}>Reset</button>
<button onClick={pauseResume}>Pause / Resume</button>
<button onClick={()=>update(2000)}>Update to 2000</button>
</div>


<button onClick={() => setshowColorPicker(showColorPicker => !showColorPicker)}>
{showColorPicker ? 'Close color picker' : 'Pick a color'}
</button>

 
{
  showColorPicker && (<ChromePicker 
    color={color} onChange={updatedColor => setColor(updatedColor.hex)}
    />
  )}

<h2>You picked {color}</h2>

<br/><br/>
  <form>
    <input 
    type='tel' 
    name='number' 
    placeholder='Card Number' 
    value={number} 
    onChange={e => setNumber(e.target.value)}
    onFocus = {e => setFocus(e.target.name)}
    />
    <input 
    type='text' 
    name='name' 
    placeholder='Name' 
    value={name} 
    onChange={e => setName(e.target.value)}
    onFocus = {e => setFocus(e.target.name)}
    />
    <input 
    type='text' 
    name='expiry' 
    placeholder='MM/YY Expiry' 
    value={expiry} 
    onChange={e => setExpiry(e.target.value)}
    onFocus = {e => setFocus(e.target.name)}
    />
    <input 
    type='tel' 
    name='cvc' 
    placeholder='CVC' 
    value={cvc} 
    onChange={e => setCvc(e.target.value)}
    onFocus = {e => setFocus(e.target.name)}
    />
   
  </form>

<DatePicker selected={selectedDate} onChange={date => setselectedDate(date)}/>

  </div>
  )
    
}

  export default App;
