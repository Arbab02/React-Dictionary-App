import '../App.CSS'

const Dictionary = () => {

    const show = () =>{
        const getting = document.getElementsByClassName('getting')[0];
        const word = document.getElementsByClassName('word')[0];
        const ph = document.getElementsByClassName('ph')[0];
        const pos = document.getElementsByClassName('pos')[0];
        const syn = document.getElementsByClassName('syn')[0];
        const ant= document.getElementsByClassName('ant')[0];
        const fd = document.getElementsByClassName('fd')[0];
        const sd = document.getElementsByClassName('sd')[0];
        const td = document.getElementsByClassName('td')[0];
const data = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${getting.value}`)
data.then((value1)=>{
    return value1.json()
})
.then((value2)=>{
    console.log(value2)
    word.innerHTML = getting.value
    ph.innerHTML   = 'phonetic: ' + value2[0].phonetic
    pos.innerHTML   = 'Parts Of Speech: ' + value2[0].partOfSpeech
    syn.innerHTML  = value2[0].meanings[0].synonyms;
    ant.innerHTML  = value2[0].meanings[0].antonyms;
    fd.innerHTML   = value2[0].meanings[0].definitions[1].definition;
    sd.innerHTML   = value2[0].meanings[0].definitions[2].definition;
    td.innerHTML   = value2[0].meanings[0].definitions[2].definition;
})


    }
  return (
      <div className='box'>
        {/* <h1 className='children'>Dictionary App</h1> */}
        <div className="inp">
        <input className='children getting' placeholder='Enter Your Word' type="text" />
        <button className='children' onClick={show}>Generate</button>
        </div>
        <div className='ans'>
        <h2 className='children word'>Your Word</h2>
        <h2 className='children pos'>Parts Of Speech</h2>
        <h2 className='children ph'>Phonetic</h2>
        <h2 className='children syn'>Synonyms</h2>
        <h2 className='children ant'>Antonyms</h2>
        <p className='children  fd'>First Definiton</p>
        <p className='children  sd'>Second Definiton</p>
        <p className='children  td'>Third Definiton</p>
        </div>
    
    
    </div>
  )
}

export default Dictionary