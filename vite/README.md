const [length,setlength]=useState(8)
    const [num,setnum]=useState(true)
    const [chare,setchare]=useState(false)
    const [password,setpassword]=usestate("")



    const passwordGenerator =useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(num){str+="0123456789"}
      if(char){str+="!@#$%^&*()~`"}
      for (let i = 1; i <= length; i++) {
        let char =Math.floor(Math.random()*str.length+1)
        pass = str.charAt(char)

      }
      setpassword(pass)


    },[length,num,char,setpassword])


