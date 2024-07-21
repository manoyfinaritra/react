import { useState } from "react"

function Contact() {
    const[name, setName] = useState('exemple')
    const change = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div>
        <form className="form-manoy">
            <div>
                <img src="" alt="" />
            </div>
            <div><h3>connexion</h3></div>
                <input type="text"  value={name} onChange={change}/>
                <input type="password" placeholder="password" />
                <input type="email" placeholder="email" />
            <div>
                <button>envoyer</button>
            </div>
        </form>
    </div>
  )
}

export default Contact