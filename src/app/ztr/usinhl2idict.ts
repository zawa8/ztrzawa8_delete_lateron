export const usinhl2idict: {
    all_phoniks_list: string[],
    hard_consonants_modulo_list: number[],
    vovli_modulo_list: number[]
  }= {
    /////[ɦꟈđꞇćṅᴀ]ɦćԃďńàᴀ	//kKzZtTdDjJqQnpfbBmyrlwSsɦ
      all_phoniks_list: [
        '', // 	d80
        'N', // d81 CANDRABINDU
        'N', // d82 nbindu
        ':', // d83 visarga
        'e', // d84
        'A', // d85 letter a
        'Aα', // d86 letter aa
        'Ae', // d87  letter ae
        'αe', // d88  letter aae
        'AI', // d89  letter i
        'AI', // d8a letter ii
        'AU', // d8b= sinhala letter u
        'AU', // d8c= sinhala letter uu
        'r', // 	d8d volalic r
        'ri', // 	d8e vocalic rr
        'l', // 	d8f volalic l
        'li', // 	d90 volalic ll
        'AE', // 	d91 letter e
        'AE', // 	d92 letter ee
        'AE', // 	d93= sinhala letter ai
        'AO', // 	d94= sinhala letter o
        'AO', // 	d95= sinhala letter oo
        'AO', // 	d96= sinhala letter au
        '', // 	d97 null
        '', // 	d98 null
        '', // 	d99 null
        'k', // 	d9a ka
        'K', // 	d9b kha
        'g', // 	d9c ga
        'Gh', // 	d9d gha
        'N', // 	d9e nga
        'N', // 	d9f nnga
        'c', // 	da0 ch
        'Ch', // 	da1 chh
        'z', // 	da2 za
        'Z', // 	da3 zha
        'n', // 	da4= sinhala letter nya
        'n', // 	da5= sinhala letter jnya
        'n', // 	da6= sinhala letter nyja
        't', // 	da7= sinhala letter tta
        'T', // 	da8= sinhala letter ttha
        'd', // 	da9= sinhala letter dda
        'D', // 	daa= sinhala letter ddha
        'n', // 	dab= sinhala letter nna
        'n', // 	dac= sinhala letter nndda
        'j', // 	dad= sinhala letter тa
        'J', // 	dae= sinhala letter тha
        'q', // 	daf= sinhala letter ԃa
        'Q', // 	db0= sinhala letter ԃha
        'n', // 	db1= sinhala letter na
        '', // 	db2=null
        'nq', // 	db3= sinhala letter nԃa
        'p', // 	db4= sinhala letter pa
        'f', // 	db5= sinhala letter pha
        'b', // 	db6= sinhala letter ba
        'B', // 	db7= sinhala letter bha
        'm', // 	db8= sinhala letter ma
        'mb', // 	db9= sinhala letter mba
        'y', // 	dba= sinhala letter ya
        'r', // 	dbb= sinhala letter ra
        '', // 	dbc=null
        'l', // 	dbd= sinhala letter la (dental)
        '', // 	dbe=null
        '', // dbf=null
        'w', // 	dc0= sinhala letter va
        'S', // 	dc1= sinhala letter sha
        's', // 	dc2= sinhala letter ssa
        's', // 	dc3= sinhala letter sa (dental)
        'ɦ', // 	dc4= sinhala letter ha
        'l', // 	dc5= sinhala letter lla
        'f', // 	dc6= sinhala letter fa
        '', // 	dc7=null
        '', // dc8=null
        '', // dc9=null
        '', // 	dca= virama
        '', // 	dcb=null
        '', // 	dcc=null
        '', // 	dcd=null
        '', // 	dce=null
        'α', // dcf= sinhala vowel sign aa
        'e', // dd0= sinhala vowel sign ae
        'Ae', // 	dd1= sinhala vowel sign aae
        'i', // 	dd2= sinhala vowel sign i
        'i', // 	dd3= sinhala vowel sign ii
        'u', // dd4= sinhala vowel sign u
        '', // dd5=null
        'u', // dd6= sinhala vowel sign uu
        '', // dd7=null
        'ri', // dd8= sinhala vowel sign vocalic r
        'e', // dd9= sinhala vowel sign e
        'e', // dda= sinhala vowel sign ee
        'ei', // ddb= sinhala vowel sign ai
        'o', // ddc= sinhala vowel sign o
        'o', // ddd= sinhala vowel sign oo
        'o', // dde= sinhala vowel sign au
        'l', // ddf= sinhala vowel sign vocalic l
        '', // de0=null
        '', // de1=null
        '', // de2=null
        '', // de3=null
        '', // de4=null
        '', // de5=null
        '0', // de6
        '1', // 	de7
        '2', // de8
        '3', // de9
        '4', // dea
        '5', // deb
        '6', // dec
        '7', // ded
        '8', // dee
        '9', // def
        '', // df0=null
        '', // df1=null
        'ri', // df2= sinhala vowel sign vocalic rr
        'li', // df3= sinhala vowel sign vocalic ll
        '.', // df4 eotext
        '', // df5
        '', // df6
        '', // df7
        '', // df8
        '', // df9
        '', // dfa
        '', // dfb
        '', // dfc
        '', // dfd
        '', // dfe
        '', // dff
    ],
    // consonants_modulo_range : [ 0x15, 0x39 ],
    hard_consonants_modulo_list : [
    0x1A, 0x1C, 0x20, 0x22, 0x27, 0x29, 0x2D, 0x2F, 0x33, 0x34, 0x36, 0x39, 0x42, 0x43,
    ],
    vovli_modulo_list : [
    0x6, 0x8, 0x9, 0xA, 0xB, 0xC, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16,
    ],
};
    /*
     *******
        //'_α', // d06
        //'_e', // d07
        //'_A', // d08
        //'_i', // d09
        //'_i', //  90A	d8A_i
        //'_u', // 		d8b_e 90B
        //'_u', // 	90C	d8c
    ******
        // '_e', // 	d91
        // '_e', // 	d92
        // '_e', // 	d93
        // '_o', // 	d94
        // '_o', // 	d95
        // '_o', // 	d96
    */
    
