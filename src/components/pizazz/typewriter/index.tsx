'use client'
import { Flex } from '@mantine/core';
import  { useState, useEffect } from 'react';


const useTypewriter = (speed = 50, elements: string[]) => {
    const [displayText, setDisplayText] = useState('');
    let readyToType = true;
    function removeText(curr_text : string){
        const backInterval = setInterval(() =>{
            curr_text = curr_text.substring(0, curr_text.length - 1);
            setDisplayText(curr_text)
            if(curr_text.length == 0){
                clearInterval(backInterval);
                readyToType = true;
            }
        }, speed);
    }
    
    useEffect(() => {
        function type_word(text: string){
            readyToType = false;
            let curr_text = ""
            setDisplayText("");
            let i = 0;
            const myInterval = setInterval(() =>{
                curr_text = curr_text + text[i]
                setDisplayText(curr_text)
                i++;
                if(i >= text.length){
                    clearInterval(myInterval);
                    setTimeout(()=>{
                        removeText(curr_text);
                    }, 2000)
                }
            }, speed);
        }
        let wordIdx = 0;
        setInterval(() =>{
            if(readyToType){
                type_word(elements[wordIdx]);
                wordIdx = (wordIdx + 1) % elements.length;
            }
        }, 1000)
    }, [speed, elements, readyToType]);
  
    return displayText;
  };
export default function Typewriter(props: {startText: string, elements : string[]}) {
    const displayText = useTypewriter(50, props.elements);
    
    return <Flex><h2>{props.startText} <span style={{textDecorationLine:"underline"}}>{displayText}</span></h2></Flex>
  }
  