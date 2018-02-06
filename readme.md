control.start(){
		-rozpoczyna nagrywanie
		-wykonuje metodę result() - pobieranie słów
		-wykonuje metodę error() - reportowanie błędów
	}
	control.end(){
		-zatrzymuje nagrywanie
	}
	control.result(){
		-wykonuje metodę onresult na obiekcie recognition
		-pobiera powiedziane słowo
		-wykonuje funkcję pick(word) która robi coś w zależności od powiedzianego słowa
		-restartuje nagrywanie
	}
	control.error(){
		-raportuje błędy
		-gdy wykryje brak mowy, to restartuje nagrywanie
		-WAŻNE!!! kaszlnięcia itp. przerywały nagrywanie. Onspeechend pozwala na zrestartowanie nagrywania po takim wydarzeniu
	}
	control.restart(){
		-restartuje nagrywanie
		- let x - zmienna interwału z której po udanym restarcie usuwamy interwał
		- let err = false - zmienna która mówi blokowi finally{} czy wykonało się try, czy catch
		-promise - asynchroniczność  itp
	}