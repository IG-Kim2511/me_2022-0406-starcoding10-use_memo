import React, { useEffect, useMemo, useState } from 'react'


/* 🍀 js0505
  준비: 
  1. input value ->setHardNumber

  2.  hardCalculate(hardNumber)함수 실행

  3. hardNumber + 10000 ...return

  4. return 된 hardCalculate함수 결과물을 데이터바인딩
*/

const hardCalculate =(p_number)=>{

  console.log("hard cal")

  for (let i = 0; i < 987654321; i++) {  /*  */  }   //delay time

  return p_number + 1000;

}

/* 🍀 js0510
  const hardNumber가 재설정될때마다 App()이 재렌더링되고있음

  ㅂ) 간단한 코드인데도 계산에 1초정도 걸림
 App component전체가 재렌더링 되면서 hardCalculate도 실행되기때문임..


*/
const easyCalculate =(p_number)=>{

  console.log('easy cal')
  return p_number +1;

}

function App() {

  // js0505
  const [hardNumber, sethardNumber] = useState(1)  

  // const hardSum = hardCalculate(hardNumber);
  
  /* 🍀 js0522

    10.
    useMemo() hook에 ... hardCalculate()함수..넣음

    [ ]안의 state가 바뀔때에만, 그 안의 코드 실행함, 

    (hardNumber이 바뀔때에만 hardCalculate()함수호출함, )

    그게 아니면 hardSum값 그대로 재사용함 

    (App 컴포넌트가 재렌더링되어도, 그대로 사용되어서 hardCalculate()함수를 호출안하고, 속도에 좋음)

    20. 
    App 컴포넌트가 재랜더링되어도, easyCalculate()함수만 실행되어서 속도가 빠른걸 확인할수있음
  
  */

    const hardSum = useMemo(() => {
      return hardCalculate(hardNumber);
    }, [hardNumber])



  // js0510
  const [easyNumber, setEDasyNumber] = useState(1)

  const easySum = easyCalculate(easyNumber);




  return (
    <div>
      <section>

      <h1>별코딩 useMemo</h1>
      <h1>object data type</h1>

        <h3> hard calculate</h3>
        
        <input type="number"  value={hardNumber} onChange={(e)=> sethardNumber(e.target.value)}/>

        <span> +10000 = {hardSum}</span>
      </section>

      <section>
        <h3> easy calculate</h3>

        <input type="number"  value={easyNumber} onChange={(e)=> sethardNumber(e.target.value)}/>

        <span> +10000 = {easySum}</span>
      </section>
    
    
      <App2/>
    </div>
  );
}



/* 🍀 js0530 준비.  
클릭하면, 
한국 - 외국 바뀜

1. 클릭한때, isKorea  : true- false 바꿈

2. isKorea 가 true ->한국

 isKorea 가 false  -> 외국

으로 바뀜

3. location 데이터바인딩

*/



const App2 = () => {

  // js0530
  const [number, setNumber] = useState(0)

  const [isKorea, setIsKorea] = useState(true)


  // 

  /* 🦄 js0540  Primitive data 타입 vs reference data 타입 (Object타입)
    🍉Primitive data 타입

    변수에  Privitive타입 넣으면 그대로 담김

    🍉reference data 타입 (Object타입)

    변수에  Object타입넣으면 , 너무커서 그대로 담지않음. 

    일단 메모리안에 넣고 

    변수안에 그 객체가 담긴 메모리의 주소를 넣음
  */

  /* 🍀 js0540 
    useEffect 실행
    첫랜더링일때,
    []안의 state가 바뀐때에만 실행됨

    🍉 10. []안의 state가  (Primitive data 타입인 string 인때...)
        -> 정상작동
      
    🍉 20. []안의 state가 (reference data 타입인 object 인때...)

      ->버그 :        
        []안의 state가 바뀐때 뿐만이 아니라, 모든경우에 실행되고 있음  . 왜??
                  
      -> 답:
        number변수를 바꾸어도

        Object형식의 location변수가 이전의 location변수와 다른 변수이므로, 
        useEffect는 location도 바뀌었다고 인식함.

        그래서 모두 다시 재랜더링함

    🍉30.
        location변수가 초기화되는것을 막아주기

        useMemo사용해서 
        isKorea 가 바뀐때에만 적용  
  */

  // 🥒js0540-10
  // const location = isKorea ? "Korea" : "USA"

  // 🥒js0540-20
  // const location ={
  //   country: isKorea ? 'Korea' : 'usa',
  // }

  // 🥒js0540-30
  const location = useMemo(() => {
    return{
      country: isKorea ? "Korea" : "usa",
    }
  }, [isKorea])


  useEffect(() => {
    console.log('useEffect calling')
  }, [location])
  

  // js0540-20


  return (
    <div>
      <section>
        <h2>number</h2>
        <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} />
      </section>

      <section>
        <h2>where are you now?</h2>

        {/* <p>country : {location}</p> */}

         <p>country : {location.country}</p> 

        <button onClick={()=>{setIsKorea(!isKorea)}}>button</button>
      
      
      </section>
      
    
    
    
    
    </div>
  )
}


export default App;
