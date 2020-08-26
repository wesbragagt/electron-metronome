import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { Global,Display, Range, Container, Button, Circle } from '../components';

// TODOS
// ADD THE ABILITY TO INCREASE THE BPM WITH ARROW KEYS
// ADD PLAY AND STOP ON SPACE BAR
// STYLE IT

const audio = "data:audio/flac;base64,ZkxhQwAAACIQABAAAARBAARBAfQBcAAAAZLfwZb9QVlTtnnZLOsaWczxhAAAKCAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMCAyMDEzMDUyNgAAAAD/+HQMAAGRJhgKxHRX63x+6QxXqTpCYAANDJgITNAmIhAB/5BgFt4iAfgBZHY4A9UZAAZ65QManTnQUAKnx8A+ZcwFun6gX1gMVIgAfaXgEml9KIzgfUBYAnhLwJl/Oek+A5rZADhx2ApN3s198CTrfAPyHMGRV3DcKAYAAwBJ7uA8wysUF8HYV6AUyIIKv/ObD0B7BRAOf6QFVnlVIrg0zuwGYTqCTP9rJXAWm4AC1HQDxVMnllwVg94CGPDDq6XrJRgQ2zwHp6wGR5tQFGh9dygZtwIXeHNK+AHAw8BZ34BSgBUY44Ze3IEt2uEhBfQg3BcaTA+MSB/rIUTNIUTWYN9hMdT2M/TYEg+cDC6KGzFJQAzj8TBBUujjHFLnsqB07TAj7JBa4qTwQY15pQ9rKxSdhzrJwxaKA3o/BKIsTkDYtGCwxtDRCIqzegQo2pAr9KD0mKmwtRJeuhMscnKzjNLLCC4CCDoYNaPiZmNPNIsdzTJkF0zHIRyDGDZzCLozKYLfNVZUYt6pWUiy7/Bjf5CyRUJ95iW1TLkIET7MJJU5yxARVwzCNBsIZHCVflJ5ZE+0K30dXKabEjNYdP+TulglDBSFPJNlCtxqLycmj5OeMkURsMFSXgrtnXLllFm5cySbjiZQKoshh0ASOArXdBJuJ9c2syJBjM8II1VJYFtSEVbCw3f80qnABkAClxxw8mPk8NdHt4q9gNy0UpWEuO2UUx3jZSuRqVkcoWnWIWa1ahV3Y3K5KbKMH879vqjUtUZMatwgfZeOMvsQlyisbQ71rIxGX9FhUSYvRHvF3xeunSYfQ4iRItSvuvzR5iO3xDFaEdARSGOC1fGIpY/hll/Z8dBI+J6u22KvVuDK2IiXW9V8Htkhxa94kLDPz25hsMC8qImvymxd70W8D5iDfsU9TYMYt5EIfJnAWr0bS7NbeHbQu6ZsuZyvTuhwMbc9XFv3q4b4amazBWwDvKfuyGSBrwrbr8+kkvhfZKs7C2FwoVooWXOnr/sWmZ5hWFSSpEtq0O6bjQhPR6Eguo8PmOz4SoKeIgpRmJZ1CEWpm1U6F/2UKJhBBJi0KeJ6kgEoPCeWSBmv85AOeDhOk/mJgciON6g0DZHbeVa7jIhYMBSP4ukvNIr36CvTjhkZCkWJk5godIxpiOjqiEnoJQ2K3HjKtYcY2CFWiXpIrqaGEIgef4gs+JXnhRm4GziHB2h/OIRB6BgfhgH4ap2DiTgVwIUN6FjaguFoE0uENThJRYJMOBCwg3zIOyKB00gOl4LXWC79gW14DOaCQAglUoEKCApZgc1YHC2AxzgJBoFcSBWWgICoBp+BEXgO64BeGAXYgMGoCoCAOYgEk4CGWAb5gB54A2SAWGgEfoAHyAINgDuYAkeAAbgBfoAgyAEEgAC4ARGADPgAf4AFyABYgAeIACGAAMgAaYAECABJgAagfd0="

const Increment = (props) => <Button{...props}>+</Button>
const Decrement = (props) => <Button{...props}>-</Button>

const Home = () => {
  const calcMS = value => 1000/(value/60)
  const beep = useRef(null)
  
  const [id, setId] = useState(null)
  const [bpm, setBPM] = useState(60)
  const [intervalMS, setIntervalMS] = useState(calcMS(60))
  const [isPlaying, setIsPlaying] = useState(false)
  const [changeBy, setChangeBy] = useState(1)

  const intervalStart = (int) => setInterval(() => beep && beep.current.play(), int);
  const intervalClear = id => {
    window.clearInterval(id)
    setId(null)
  }
  
  useEffect(()=>{
    if(window){
      beep.current = new window.Audio(audio)
    }
  }, [])

  useEffect(()=>{
    const newMS = calcMS(bpm)
    if(isPlaying){
      intervalClear(id) // always clear the previous interval
      setId(intervalStart(newMS)) // run the new tempo
    }
    setIntervalMS(newMS)
  }, [bpm, setIntervalMS, isPlaying])

  const bpmHandler = (e) => {
    const {value} = e.target
    setBPM(value)
  }

  const modifier = {
    increase: () => {
      const newBPM = Number(bpm) + Number(changeBy)
      setBPM(newBPM)
    },
    decrease: () => {
      const newBPM = Number(bpm) - Number(changeBy)
      setBPM(newBPM)
    }
  }

  const playHandler = (e) => {
    if(!isPlaying){
      intervalClear(id)
      setId(intervalStart(intervalMS))
      setIsPlaying(true)
    }
  }

  const stopHandler = (e) => {
    if(isPlaying){
      intervalClear(id)
      setId(null)
      setIsPlaying(false)
    }
  }

  const changeByHandler = (e) => {
    const {value} = e.target
    setChangeBy(value)
  }

  return (
    
      <React.Fragment>
        <Head>
        <title>Metronome App</title>
      </Head>
      <Global/>
      <Circle>
        <Display bpm={bpm} onChange={bpmHandler} changeByValue={changeBy} changeByHandler={changeByHandler}/>
    <Container>
      <Decrement onClick={modifier.decrease}/>
      {/* <Range min={20} max={220} value={bpm} onChange={rangeHandler}/> */}
      <Increment onClick={modifier.increase}/>
    </Container>
    <Container>
      <Button onClick={playHandler}>PLAY</Button>
      <Button onClick={stopHandler}>STOP</Button>
    </Container>
      </Circle>
      </React.Fragment>
    
  );
};

export default Home;
