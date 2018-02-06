//////////////////////////////////
//Web speech API 
//////////////////////////////////
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
const words = ['start']
const grammar = '#JSGF V1.0; grammar words; public <word> = ' + words.join(' | ') + ' ;'

const recognition = new SpeechRecognition()
const speechRecognitionList = new SpeechGrammarList()

speechRecognitionList.addFromString(grammar, 1)

recognition.grammars = speechRecognitionList
recognition.lang = 'pl-PL'
recognition.interimResults = false
recognition.maxAlternatives = 1
/********************************/

//////////////////////////////////
//Web speech API control object
//////////////////////////////////
const control = {
	start:	()=>{
		recognition.start()
		control.result()
		control.error()
	},
	end:	()=>{
		recognition.stop()
	},
	result:	()=>{
		recognition.onresult = (event)=>{
			let word = event.results[0][0].transcript
			pick(word)
			control.restart()
		}
	},
	error:	()=>{
		recognition.onerror = (event)=>{
			if(event.error == 'no-speech')
				control.restart()
			else
				console.log('Błąd control:'+event.error)
		}
		recognition.onspeechend = ()=>{
			control.restart()
		}
	},
	restart:()=>{
		let x
		let err = false
		new Promise((resolve, reject)=>{
			control.end()
			resolve()
		}).then(()=>{
			x = setInterval(()=>{
				try{
					err = false
					recognition.start()	
				}catch(e){
					err = true
					control.end()
				}finally{
					if(!err)
						clearInterval(x)
				}
			}, 200)
		})
	}
}
/********************************/

//////////////////////////////////
//Task
//////////////////////////////////
function pick(word){
	switch(word){
		case words[0]:
			console.log(word)
			break
		case words[1]:
			console.log(word)
			break
		case words[2]:
			console.log(word)
			break
		case words[3]:
			console.log(word)
			break
		case words[4]:
			console.log(word)
			break
		default: 
			return
	}
}
/********************************/
control.start()