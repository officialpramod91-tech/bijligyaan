---
title: "Fridge Me Current Kyun Aata Hai? 6 Wajah + Fix (2026)"
description: "Fridge ko chhune par current ya jhatka kyun lagta hai? Earthing fail, Y-capacitor leakage, defrost paani aur 2-pin plug jaisi 6 wajah, safe testing, IS/CEA aur fix."
pubDate: 2026-11-04
author: "Er. Pramod Kumar"
tags: ["Fridge Electric Shock", "फ्रिज में करंट", "Earthing", "RCCB", "Electrical Safety", "Home Appliances"]
category: "electrical-safety"
readTime: "7 min read"
fieldVerified: true
image: "/images/fridge-electric-shock-reasons-solution.webp"
imageAlt: "Fridge se jhatka lagne ke karan: earthing fail, leakage aur testing ka visual"
---

 
**Hindi me:** फ्रिज में करंट क्यों आता है, फ्रिज छूने पर झटका क्यों लगता है, और उसे कैसे ठीक करें।

 
> **Quick Answer (संक्षेप में):** Fridge ki body ya door handle par **jhanjhanahat ya jhatka** aane ki sabse aam wajah **earthing ka missing ya tootna** hai, jaise socket me earth wire na judna, **2-pin adapter/extension** ya kharab earth. Dusri wajahein: inverter fridge ke **Y-capacitor ka leakage**, **defrost ka paani** compressor par girna, aur **compressor ki winding ka insulation kharab hona**. **Rubber chappal pehenna solution nahi hai.** Pehle supply band karke fridge ko na chhuein, phir **earthing aur RCCB** theek karwayein.
 
**Is guide me:** [Turant kya karein](#emergency) · [Typical scenarios](#cases) · [6 wajah](#wajah) · [Safe testing](#testing) · [IS & CEA](#is-cea) · [Permanent fix](#fix) · [FAQs](#faqs)
 
Kitchen me nange pair fridge ka handle pakadte hi ek teekhi jhanjhanahat (tingling) mehsoos hui hai? Zyada tar log ise “thoda bohot to aata hi hai” keh kar taal dete hain. Mai ek electrician ke taur par ek baat saaf kehna chahta hoon: **chhota leakage current kuch appliances me ho sakta hai, par jhatka lagna normal nahi hai.**
 
Fridge 24 ghante chalne wala appliance hai. Agar uski body par kisi din bhi khatarnak voltage aa gaya, to wo seedha ghar ke kisi member (khaaskar bachche ya geele haath) ke liye khatra ban sakta hai. Is guide me mai samjhaunga ki wajah kya hoti hai, safe tareeke se kaise check karein, aur permanent kaise theek karein.
 
---
 
## <a id="emergency"></a>Turant Kya Karein (Pehle Safety)
 
> ### ⚠️ Agar Fridge Se Zor Ka Jhatka Lage
> 1. **Pehle supply band karein:** fridge ka plug ya board ka switch/MCB OFF karein.
> 2. **Fridge ko dobara na chhuein**, khaaskar nange pair ya geele haath se.
> 3. Agar koi appliance se chipak jaye, to **seedha haath na lagayein.** Supply band karein, ya lakdi/plastic jaisi **dry, non-conducting cheez** se door karein, aur **112 ya 108** par call karein.
> 4. Fridge ka darwaza band rakhein (samaan kuch der thanda rehta hai), aur **electrician bulayein.**
> Ghar ko short-circuit aur hadson se bachane ke liye [electric shock aur fire safety ke niyam](/articles/electric-shock-and-fire-safety-guide/) zaroor follow karein.
 
### Tingling aur asli jhatke me fark
- **Halki jhanjhanahat:** aam taur par earth missing ya kharab hone ka sanket.
- **Teekha jhatka jisse haath hat jaye:** body par khatarnak voltage ho sakta hai. Turant supply band karein.
Dono hi **theek karwane layak** hain, kisi ko bhi “normal” na maanein.
---
 
## <a id="cases"></a>Typical Field Scenarios (Aam Taur Par Aise Cases Milte Hain)
 
> Ye **typical scenarios** hain jo site par aksar dekhne ko milte hain. Asli readings aur nateeje ghar ke hisaab se alag ho sakte hain.
 
### Scenario 1: Naye inverter fridge me “tingling”
Ghar me naya double-door inverter fridge laga, aur dusre din se door handle par jhanjhanahat. Multimeter se fridge body aur floor ke beech lagbhag **100–115V AC** dikha sakta hai.
 
**Wajah:** Wall socket kholne par dekha ki **upar ka earth terminal khali** hai, yaani earth wire juda hi nahi. Inverter fridge ke electronic board me noise filter ke **Y-capacitor** hote hain, jinse chhota leakage current body tak jata hai. Earth na ho to body ka voltage lagbhag aadhe mains tak “float” kar sakta hai.
 
**Ek zaroori baat:** meter ki high impedance ki wajah se ye voltage bada dikhta hai, par asli touch current chhota hota hai. Phir bhi bina earth ke aisa fridge chhoona theek nahi.
 
**Fix:** Socket tak **circuit wire ke barabar size ka (aam taur par 2.5 mm²) green earth wire** jodna, aur earth tak continuity check karna. Earth milte hi body voltage lagbhag **0V** ho jata hai.
 
### Scenario 2: Purana fridge, defrost ka paani aur compressor insulation
Ek 7–8 saal purane fridge me achanak teekha jhatka aane lagta hai. Board par purana kit-kat fuse hota hai aur RCCB nahi hoti.
 
**Jaanch:** Plug nikal kar **500V DC insulation tester (megger)** se compressor terminals aur body ke beech insulation resistance dekhi jati hai. Reading bahut kam (jaise 1 MΩ se neeche) aati hai.
 
**Wajah:** Compressor ke upar ki **defrost drain tray crack** ho chuki hoti hai, aur paani barso se compressor terminal box aur relay par tapakta rehta hai. Nami se winding ka insulation kamzor ho jata hai.
 
**Fix:** Tray badli jati hai, terminal/relay dry aur clean kiye jate hain, aur compressor ka insulation sudhar na ho to repair ya replace hota hai. Saath me **30 mA RCCB** lagwayi jati hai.
 
> **Dhyan dein:** Megger lagane se pehle compressor ko fridge ke **electronic board se alag karein**, warna megger ka high voltage inverter board kharab kar sakta hai. Ye kaam trained technician hi karein.
 
### Scenario 3: 2-pin extension ya stabilizer se chalta fridge
Kitchen me fridge **2-pin adapter, multi-plug ya purane stabilizer** se chal raha hota hai. Earth pin ka raasta hi toot jata hai, aur halki jhanjhanahat aati hai.
 
**Fix:** Fridge ko seedha **earth wale 3-pin socket** me lagayein. Agar aapke yahan voltage ka utar-chhadhav zyada rehta hai, toh compressor ki suraksha ke liye [fridge aur AC ke liye sahi stabilizer ka chunav](/articles/stabilizer-kya-hota-hai-ac-fridge-tv-guide/) karein aur dhyan rahe ki wo hamesha earth pin wala hi ho.
 
---
 
## <a id="wajah"></a>Fridge Me Current Aane Ki 6 Badi Wajah

![Fridge Current Flow and Leakage Causes Infographic](/images/fridge-current-leakage-causes-infographic.webp)
 
### 1. Earth Missing Ya Toota Hua (Open Earth)
Fridge metal body wala appliance hai. 3-pin plug ki upar wali moti pin body ko earth se jodti hai.
- Socket ke peeche earth wire na juda ho, ya earth pit ki resistance bahut zyada ho, to appliance ka leakage current zameen me nahi ja pata.
- Nange pair khade insaan ka shareer ek raasta ban jata hai, aur jhanjhanahat mehsoos hoti hai.
- Earthing kaise check aur theek hoti hai: [Earthing Types & Cost? Ghar Me Earthing Kaise Kare](/articles/earthing-kya-hai/).
### 2. 2-Pin Adapter Ya Bina Earth Wala Extension Board
Heavy point na ho to log multi-plug ya 2-pin cord use karte hain. 2-pin me **earth pin hoti hi nahi.** Fridge ki body electrically “float” karti hai, aur chhota leakage bhi jhatke ke roop me samne aata hai.
 
### 3. Inverter Fridge Ke Y-Capacitor Ka Leakage
Appliance safety standards (IS 302 series, IEC 60335 ke anuroop) me chhote leakage ki seema hoti hai (appliance type ke hisaab se kuch milliamp tak). Inverter fridge ke noise filter ka ek hissa body se juda hota hai.
- **Earth sahi ho:** ye leakage bina mehsoos hue zameen me chala jata hai.
- **Earth open ho:** body par float voltage aata hai aur jhanjhanahat hoti hai.
### 4. Defrost Ka Paani Aur Moisture
Defrost cycle me baraf pighalti hai aur paani compressor ke upar ki tray me jata hai. Tray crack ya drain pipe slip ho to paani compressor ke electrical terminals, relay ya wiring par girta hai. Nami aur gandagi conductive hoti hai, aur ye leakage body tak pahunchati hai.
 
### 5. Compressor Motor Ki Winding Ka Insulation Kamzor Hona
Saalon ki garmi, vibration aur voltage ke utar-chadhav se winding ka insulation kamzor ho sakta hai. Jab winding body se touch kare to isse **ground fault** kehte hain, aur body par bahut khatarnak voltage aa sakta hai. Aise me compressor repair ya replace karna padta hai. Voltage ki dikkat ho to pehle ye dekhein: [Ghar Me Low Voltage Kyun Aati Hai?](/articles/ghar-me-low-voltage-kyun-aati-hai/).
 
### 6. Neutral Ko Earth Se Jodne Ka “Jugad”
Kuch jagah tingling dekhkar neutral aur earth ko aapas me jod diya jata hai. **Ye galat aur khatarnak hai** (IS 732/IS 3043 ke hisaab se ghar ki wiring me aisa nahi karna chahiye).
- Agar kabhi neutral ka connection kamzor hua, to neutral ka current earth wire ke raste fridge ki body par aa sakta hai, aur body par khatarnak voltage ho sakta hai.
- RCCB baar-baar trip ho sakti hai, ya uska maksad hi kamzor ho jata hai.
- Neutral aur earth ka fark: [Neutral Aur Earth Wire Mein Kya Antar Hai?](/articles/neutral-aur-earth-wire-mein-kya-antar-hai/).
---
 
## <a id="testing"></a>Safe Testing: Kya Kaun Kare?

![Safe Testing Guide Multimeter and Socket Check](/images/safe-testing-multimeter-socket-check.webp)
 
### Homeowner ke liye (safe)
**3-pin socket tester** (jo aapke socket ke size ka ho) plug karte hi LED se bata deta hai ki **earth missing hai ya polarity ulti hai.** Isse aage ki jaanch electrician karega. Ghar ke andar ki wiring ya compressor terminal ko khud na kholein.
 
### Electrician Testing Protocol (Multimeter & Megger)

#### 1. Socket Phase–Neutral Test
- **Tool:** Multimeter (AC Voltage mode)
- **Normal Reading:** ~216V – 244V AC
- **Matlab:** Supply voltage sahi hai. 216V se kam ho to supply/wiring fault check karein.

#### 2. Socket Phase–Earth Test
- **Tool:** Multimeter (AC Voltage mode)
- **Normal Reading:** Lagbhag Phase–Neutral jitna (~230V)
- **Matlab:** Earth wire socket se juda hua hai. Agar 0V ya bohot kam aaye to earth line open (cut) hai.

#### 3. Socket Neutral–Earth Test (Load ON)
- **Tool:** Multimeter (AC Voltage mode)
- **Normal Reading:** 0V se 3V ke beech
- **Matlab:** Jitna kam utna behtar. Agar 5V–10V se zyada aaye to neutral path weak ya earth fault hai.

#### 4. Fridge Body–Earth / Floor Test
- **Tool:** Multimeter (AC Voltage mode)
- **Normal Reading:** Lagbhag 0V
- **Matlab:** Metal body safe hai. Agar 50V–115V AC float kare to earth cut ya Y-capacitor leakage hai.

#### 5. Earth Loop Quality Test
- **Tool:** Earth Tester / Loop Impedance Tester
- **Matlab:** Multimeter se sirf connection pata chalta hai; earth pit ka actual resistance earth tester se hi verify hota hai.

#### 6. Compressor Winding Insulation Test
- **Tool:** 500V DC Megger (Power OFF & Inverter Board Disconnected)
- **Matlab:** Winding aur body ke beech insulation check karein. 1 MΩ se kam reading insulation breakdown darshati hai.
 
> “Phase–earth ≈ 230V” ka matlab sirf ye hai ki earth pin juda hai. **Earth kitna achha hai**, ye earth resistance tester se hi pata chalta hai.
 
---
 
## <a id="is-cea"></a>IS Standards Aur CEA Regulations: Is Topic Me Kya Lagu Hai
 
| Reference | Is topic me matlab |
|---|---|
| **IS 3043** | Earthing ka code of practice |
| **IS 732** | Ghar ki wiring ka code of practice (earth wire ka size, testing) |
| **IS 302 series** | Appliance safety (leakage current ki seema, IEC 60335 ke anuroop) |
| **IS 12640 / IEC 61008** | RCCB. 30 mA RCCB rated leakage par aam taur par max ~300 ms me trip hoti hai |
| **IS 1293** | Plug aur socket |
| **CEA (Measures relating to Safety and Electric Supply) Regulations, 2023** | Installation ka test aur verify, RCD ka provision, qualified person se kaam |
 
- **Earth wire ka size:** circuit wire 16 mm² tak ho to earth wire usi size ka hota hai. 2.5 mm² power circuit ke saath **2.5 mm² earth.** Detail: [House Wiring Wire Size Chart](/articles/ghar-ki-wiring-wire-size-guide/).
- **Protection:** MCB wire ko overload aur short circuit se bachati hai ([MCB Selection Guide](/articles/mcb-types-selection-guide/)). **RCCB** shock ke risk ko kam karti hai ([RCCB Kya Hai](/articles/ghar-mein-rccb-lagana-kyun-zaruri-hai/)). DB aur circuit ki planning: [MCB Box (DB Box) Kaise Chune](/articles/mcb-box-db-box-kaise-chune/).
- **CEA 2023:** consumer ki installation ko supply se pehle test aur verify karna aur leakage se bachana hota hai.
> Standards ke **edition aur clause number** badalte rehte hain. **Latest edition BIS ki official site par check karein**, aur CEA ke exact clause ke liye Gazette/CEA ka original text dekhein. Ye legal advice nahi hai.
 
---
 
## <a id="fix"></a>Permanent Fix: Kya Karwayein
 
1. **Fridge ko seedha earth wale 3-pin socket me lagayein.** 2-pin adapter, multi-plug aur bina earth ke extension band karein. Fridge ke plug ki rating (aam taur par 5/6A) ke hisaab se socket rakhein.
2. **Socket tak sahi earth wire** (circuit wire ke barabar size) aur DB tak continuity, aur earth pit ki jaanch electrician se karwayein.
3. **Neutral ko earth se kabhi na jodein.**
4. **Defrost tray aur compressor ka area** har 3–4 mahine dekhein. Tray crack ho to badlwayein.
5. **30 mA RCCB** DB me lagwayein (heavy load ke liye alag/split RCCB electrician se plan karwayein).
6. **Naye fridge me body voltage aaye** aur earth sahi ho, to brand ke authorised service centre ko batayein. Compressor box ya internal wiring khud na kholein.
7. **Fridge ke liye alag aur sahi rating ka circuit** rakhein, shared board par bahut sare load na chalayein.
> **Jahan ghar me earthing hai hi nahi** (gaon-kasbe me aam), wahan **RCCB aur proper earth** pehli zaroori cheez hai. Tab tak 2-pin extension se fridge na chalayein.
 
---
 
## ❌ Fridge Current Ke Mamle Mein Aam Galtiyan (Common Mistakes)

Log aksar fridge se current aane par kuch aisi aam galtiyan karte hain jo ki behad khatarnak ho sakti hain. Inse aapko hamesha bachna chahiye:

<div style="border-left: 4px solid #ef4444; padding-left: 1.2rem; margin: 1.5rem 0;">

###  "Rubber Chappal Pehen Lo" Keh Kar Chhod Dena
Rubber chappal ya mat sirf aapko zameen se insulated karke shock lagne se bachati hai, lekin yeh appliance ke **fault ko theek nahi karti**. Fault waise hi bana rehta hai aur aage chal kar aag lagne ya compressor ke fukne ki wajah ban sakta hai.

###  Neutral aur Earth Wire Ko Aapas Mein Jodna (Short Loop)
Jhanjhanahat khatam karne ke liye board ke peeche se neutral aur earth ko aapas me jod dena ek **jaanleva jugad** hai. Agar peeche se kabhi neutral weak ya cut hua, to poore ghar ka return current fridge ki body par aa jayega.

###  2-Pin Adapter Ya Bina Earth Ke Extension Board Par Chalana
Heavy point ki jagah 2-pin top ya extension board chalane se appliance ka ground path bilkul cut ho jata hai, jisse body me hamesha floating current bana rehta hai.

###  Defrost Tray Ke Paani Aur Safai Ko Nazarandaz Karna
Compressor ke upar lagi tray agar crack ho aur paani electrical connections par barso se ris (leak) raha ho, to compressor motor ka insulation degrade ho jata hai jo ki bahut bada safety issue hai.

</div>
 
---
 
## <a id="faqs"></a>Aksar Pooche Jaane Wale Sawal (FAQs)
 
### 1. Fridge ko chhune par jhanjhanahat kyun hoti hai?
Sabse aam wajah earth ka missing ya kharab hona hai. Inverter fridge me noise filter ka chhota leakage earth na hone par body tak aa jata hai. Defrost ka paani ya compressor insulation ki kharabi bhi wajah ho sakti hai.
 
### 2. Kya plastic body wale fridge me bhi current aa sakta hai?
Haan. Bahar ka hissa plastic ho sakta hai, par hinges, screws, condenser coil aur compressor metal ke hote hain. Nami ya leakage hone par ye metal hisse khatarnak voltage par aa sakte hain.
 
### 3. Kya rubber chappal pehenna fridge current ka permanent solution hai?
Nahi. Rubber chappal sirf aapko zameen se alag karti hai, par fridge ka fault banaa rehta hai. Fault badh kar zyada khatarnak ho sakta hai, isliye earthing aur wiring theek karwana zaroori hai.
 
### 4. Naye fridge me body current aaye to kya karein?
Pehle socket ka earth check karwayein. Earth sahi hone ke baad bhi jhatka aaye to brand ke authorised service centre ko batayein, aur compressor ya internal wiring khud na kholein.
 
### 5. Earthing theek hai ya nahi kaise pata karein?
Socket me phase–earth me lagbhag phase–neutral jitna voltage aaye to earth pin juda hai. Par earth ki quality earth resistance tester se hi pata chalti hai, isliye electrician se jaanch karwayein.
 
### 6. Kya RCCB lagane ke baad shock lagna band ho jata hai?
Nahi. RCCB leakage current par trip hoti hai aur shock ka risk kam karti hai. Agar koi phase aur neutral dono ko ek saath pakde to RCCB trip nahi karegi. Isliye sahi wiring, earthing aur RCCB teeno chahiye.
 
### 7. Fridge se current lage to turant kya karein?
Fridge ka plug ya board ka switch band karein, fridge ko dobara na chhuein, aur electrician bulayein. Agar koi chipak jaye to seedha haath na lagayein, supply band karein ya dry non-conducting cheez se alag karein, aur 112 ya 108 par call karein.
 
### 8. Kya neutral ko earth se jodne se jhatka band ho jata hai?
Light ya tingling kuch der badal sakti hai, par ye galat aur khatarnak jugad hai. Isse body par khatarnak voltage aa sakta hai aur RCCB ka maksad kamzor ho jata hai. Aisa kabhi na karein.
 
---
 
## Final Verdict
 
Fridge me jhatka ya tingling ko “normal” na maanein. Zyada tar cases me wajah **earth ka missing hona** hoti hai, aur uska ilaaj aasaan hai: **sahi 3-pin socket, circuit ke barabar earth wire, aur 30 mA RCCB.** Agar defrost ka paani ya compressor insulation ki dikkat ho, to technician se jaanch karwayein. Aur sabse zaroori: fridge ko chhune par jhatka lage to **pehle supply band karein**, phir kaam shuru karein.
 
---
 
<div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 1.25rem; margin: 1.5rem 0; border-radius: 4px;">
  <h4 style="margin: 0 0 0.5rem 0; color: #1e293b; font-weight: 700;">Zaroori Electrical Guides</h4>
  <ul style="margin: 0; padding-left: 1.2rem; color: #475569;">
    <li>Ghar ke liye sahi safety setup: <a href="/articles/earthing-kya-hai/" style="color: #2563eb; text-decoration: underline;">Earthing kaise ki jati hai aur sahi niyam</a></li>
    <li>Human shock protection ke liye: <a href="/articles/ghar-mein-rccb-lagana-kyun-zaruri-hai/" style="color: #2563eb; text-decoration: underline;">RCCB lagane ke fayde aur tripping capacity</a></li>
    <li>Wiring ka confusion door karein: <a href="/articles/neutral-aur-earth-wire-mein-kya-antar-hai/" style="color: #2563eb; text-decoration: underline;">Neutral aur earth wire ka functional antar</a></li>
    <li>Electric shock aur short-circuit se bachav: <a href="/articles/electric-shock-and-fire-safety-guide/" style="color: #2563eb; text-decoration: underline;">Ghar ki complete electrical safety checklist</a></li>
    <li>Voltage drop ki problem kaise theek karein: <a href="/articles/ghar-me-low-voltage-kyun-aati-hai/" style="color: #2563eb; text-decoration: underline;">Low voltage aane ke mukhya kaaran aur upay</a></li>
    <li>Load ke hisaab se breaker selection: <a href="/articles/mcb-types-selection-guide/" style="color: #2563eb; text-decoration: underline;">Sahi rating ki MCB kaise chune</a></li>
    <li>Main distribution board wiring: <a href="/articles/mcb-box-db-box-kaise-chune/" style="color: #2563eb; text-decoration: underline;">Ghar ke liye DB box selection guide</a></li>
    <li>Heavy appliances protection: <a href="/articles/stabilizer-kya-hota-hai-ac-fridge-tv-guide/" style="color: #2563eb; text-decoration: underline;">Fridge aur AC ke liye stabilizer zaroori hai ya nahi</a></li>
  </ul>
</div>

 
### ⚠️ Disclaimer
Ye article **sirf jaankari aur educational awareness** ke liye hai. Bijli ka kaam jaan-lewa ho sakta hai. Fridge ke compressor terminal, DB aur wiring ka kaam **licensed/qualified electrician ya brand ke authorised technician** se hi karwayein, aur kaam se pehle supply band karein. Voltage, resistance aur testing ki readings ghar aur appliance ke hisaab se alag hoti hain; yahan di gayi values typical guidance hain. BIS/CEA ke standards time ke saath update hote hain; latest edition aur exact clause ke liye official source dekhein. Ye legal ya engineering advice nahi hai, aur author is jaankari ke galat istemaal se hone wale nuksan ke liye zimmedar nahi hoga.
 
---


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Fridge ko chhune par jhanjhanahat kyun hoti hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sabse aam wajah earth ka missing ya kharab hona hai. Inverter fridge me noise filter ka chhota leakage earth na hone par body tak aa jata hai. Defrost ka paani ya compressor insulation ki kharabi bhi wajah ho sakti hai."
      }
    },
    {
      "@type": "Question",
      "name": "Kya plastic body wale fridge me bhi current aa sakta hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Haan. Bahar ka hissa plastic ho sakta hai, par hinges, screws, condenser coil aur compressor metal ke hote hain. Nami ya leakage hone par ye metal hisse khatarnak voltage par aa sakte hain."
      }
    },
    {
      "@type": "Question",
      "name": "Kya rubber chappal pehenna fridge current ka permanent solution hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nahi. Rubber chappal sirf aapko zameen se alag karti hai, par fridge ka fault banaa rehta hai. Fault badh kar zyada khatarnak ho sakta hai, isliye earthing aur wiring theek karwana zaroori hai."
      }
    },
    {
      "@type": "Question",
      "name": "Naye fridge me body current aaye to kya karein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pehle socket ka earth check karwayein. Earth sahi hone ke baad bhi jhatka aaye to brand ke authorised service centre ko batayein, aur compressor ya internal wiring khud na kholein."
      }
    },
    {
      "@type": "Question",
      "name": "Earthing theek hai ya nahi kaise pata karein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Socket me phase–earth me lagbhag phase–neutral jitna voltage aaye to earth pin juda hai. Par earth ki quality earth resistance tester se hi pata chalti hai, isliye electrician se jaanch karwayein."
      }
    },
    {
      "@type": "Question",
      "name": "Kya RCCB lagane ke baad shock lagna band ho jata hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nahi. RCCB leakage current par trip hoti hai aur shock ka risk kam karti hai. Agar koi phase aur neutral dono ko ek saath pakde to RCCB trip nahi karegi. Isliye sahi wiring, earthing aur RCCB teeno chahiye."
      }
    },
    {
      "@type": "Question",
      "name": "Fridge se current lage to turant kya karein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fridge ka plug ya board ka switch band karein, fridge ko dobara na chhuein, aur electrician bulayein. Agar koi chipak jaye to seedha haath na lagayein, supply band karein ya dry non-conducting cheez se alag karein, aur 112 ya 108 par call karein."
      }
    },
    {
      "@type": "Question",
      "name": "Kya neutral ko earth se jodne se jhatka band ho jata hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Light ya tingling kuch der badal sakti hai, par ye galat aur khatarnak jugad hai. Isse body par khatarnak voltage aa sakta hai aur RCCB ka maksad kamzor ho jata hai. Aisa kabhi na karein."
      }
    }
  ]
}
</script>