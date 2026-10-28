---
title: "Ghar Me Low Voltage Kyun Aati Hai? 5 Wajah, Safe Testing Aur Fix (2026)"
description: "Ghar me low voltage kyun aati hai? Loose neutral, patli wiring, transformer overload ke 5 kaaran, multimeter se safe testing, IS 732 aur CEA rules, DISCOM complaint aur permanent solution."
pubDate: 2026-10-27T00:00:00Z
category: "home-electrical-guide"
author: "Er. Pramod Kumar"
tags: ["Low Voltage Problem", "लो वोल्टेज", "Voltage Fluctuation", "Loose Neutral", "IS 732", "Home Wiring"]
image: "/images/low-voltage-guide.webp"
imageAlt: "Multimeter se ghar ke DB par low voltage aur neutral testing karta electrician"
---

> **Quick Answer (संक्षेप में):** Ghar me voltage lagatar **216V se neeche** aaye to wo normal nahi hai (Standard 230V ±6% = **216V–244V**). Zyada tar cases me wajah teen jagah milti hai: **(1) ghar ke main DB ya joint me loose neutral/phase, (2) patli ya bahut lambi wiring, (3) bahar DISCOM side par transformer overload ya phase imbalance.** Pehle **multimeter se safe test** karke pata karein ki fault ghar me hai ya bahar. **Neutral aur earth ko kabhi jodkar voltage badhane ki koshish na karein.**

Garmi me AC aur sardi me geyser chalate hi light achanak dim ho jati hai. Fan dheere ghoomta hai, fridge ka compressor baar-baar cut karta hai. Aur sabse pehla jawab har koi yahi deta hai: *"Transformer kharab hai."*

Maine pichhle 10 saal me industrial aur residential sites par kaam karte hue ek baat dekhi hai: **har baar galti transformer ki nahi hoti.** Kai baar wajah ek dheela screw, terminal par carbon ya ghar ke andar ki patli wiring hoti hai. Is guide me hum seedhe practical bhasha me samjhenge: kitni voltage sahi hai, testing kaise karein, kaun si jagah kiski zimmedari hai, aur permanent solution kya hai.

> ### ⚠️ Safety Pehle (Suraksha Niyam)
> - **Energy meter ke terminal DISCOM ke seal me hote hain.** Unhe kholna ya chhedna kanoonan galat hai aur tampering maana ja sakta hai. Meter side ka kaam sirf bijli vibhag ka authorised lineman karega.
> - Consumer ko sirf **apne Main Switch, DB box aur internal wiring** par kaam karna chahiye, aur wo bhi **main supply OFF** karke.
> - Live measurement ke liye **CAT III ya CAT IV rated multimeter** aur insulated probes use karein. Agar electrical training nahi hai, toh testing certified electrician se karwayein.

---

## 1. Ghar Me Kitni Voltage Normal Hai? (230V Aur ±6% Ka Matlab)

Single-phase supply me phase–neutral standard voltage **230V AC (50 Hz)** hoti hai (Reference: IS 12360).

Utility company ko ye supply kitni range me maintain karni hoti hai, ye **State Electricity Regulatory Commission (SERC) Supply Code** me tay hota hai. Standard Supply Code ke mutabiq residential low-tension (LT) consumer ke liye declared voltage me **±6%** se zyada variation allow nahi hota.

| Reading Range | Supply Status | Action |
|---|---|---|
| **216V – 244V** | Normal Healthy Band (230V ±6%) | Sab appliances safe hain |
| **200V – 215V** | Low Voltage Zone | Heavy load par line inspect karein |
| **160V – 190V** | Severe Low Voltage | Compressor loads ko turant band karein |
| **245V se upar** | **High Over-Voltage** | Broken neutral ka sign; turant isolate karein |

### Momentary Dip vs Permanent Low Voltage
Compressor ya motor start hote waqt **1–2 second ka halka jhatka (dip)** normal hota hai kyunki motor initial starting torque ke liye inrush current leti hai. Problem tab hoti hai jab **running condition me bhi** voltage lagatar 216V se neeche tiki rahe.

---

## 2. Ghar Me Low Voltage Aane Ke 5 Asli Kaaran

Field troubleshooting ke dauran low voltage (घर में लो वोल्टेज की समस्या) ke 5 mukhya kaaran milte hain:

### Wajah 1: Loose Joint Ya Loose Neutral (Ghar Ke DB / Switch Me)
Field me milne wali sabse aam wajah loose terminal hoti hai. Ek dheela connection ya carbon jama hua screw **contact resistance** generate karta hai.

Agar kisi terminal joint par **0.5 Ω** ka contact resistance ban gaya aur us line se **13 A** (lagbhag 3 kW load) guzar raha hai, toh wahan voltage drop lagbhag **6.5V** hoga aur joint par heat generation **I²R = 13² × 0.5 ≈ 85 Watt** tak chali jayegi. Itni heat se neutral link kaala padta hai, insulation pighalti hai aur load chalte hi voltage achanak drop ho jati hai.

DB panel ke standard connection samajhne ke liye padhein:  
👉 [MCB Box (DB Box) Kaise Chune? Ways, Price & Wiring Rules →](/articles/mcb-box-db-box-kaise-chune/)

### Wajah 2: Ghar Ke Andar Patli Ya Bahut Lambi Wiring
Taar patli ho ya lambi, conductor resistance ke chalte line voltage drop hota hai. Aam taur par **2.5 mm² copper wire** par 30 meter lambi one-way line me 16A load chalne par lagbhag 6V–7V ka drop ban jata hai.

IS 732 wiring code of practice ke mutabiq sub-circuits par permissible voltage drop limit ke andar hona chahiye. Heavy load jaise AC aur geyser ke liye hamesha alag direct circuit nikalna zaroori hai.

Sahi conductor size ke liye dekhein:  
👉 [House Wiring Wire Size Chart Guide: Kaunsi Wire Best Hai? →](/articles/ghar-ki-wiring-wire-size-guide/)  
👉 [Home Electrical Load Calculation: Kitna Load Chahiye? →](/articles/home-electrical-load-calculation/)

### Wajah 3: Transformer Overload Ya Purani LT Line
Garmi me peak hours par jab poori colony ke AC ek sath chalte hain, toh local distribution transformer secondary winding par over-saturated ho jata hai. Agar transformer se aapka ghar 300–400 meter door hai, toh patli overhead line ke end par aate-aate voltage gir jati hai. Iska lakshan hai: **poore mohalle me ek sath dim light aana aur no-load par bhi voltage 180V–190V rehna.**

### Wajah 4: 3-Phase Distribution Par Phase Imbalance
Galiyon me chalne wali LT line 3-phase (R, Y, B) hoti hai. Local connections judte-judte kisi ek phase par zyada ghar load ho jaate hain jabki doosre phase khali rehte hain. Overloaded phase par voltage dab jati hai jabki bagal wale padosi ka phase normal chalta hai.

### Wajah 5: Purane Main Switch Ya Pitted MCB Contacts
Kayi saal purane knife-switch, porcelain fuse ya saste switchgear ke brass contacts heat hokar pitted (khurdure aur black) ho jaate hain. Yeh internal loose contact current flow me barrier banta hai.

Proper switchgear selection ke liye dekhein:  
👉 [MCB Selection Guide: Ghar Ke Liye Sahi MCB Kaise Chune? →](/articles/mcb-types-selection-guide/)

---

## 3. Fault Ghar Me Hai Ya Bahar? Safe Testing Guide

Yeh testing **hamesha Main Switch ya DB box ke consumer side** par ki jaati hai. Energy meter ko bilkul na chhedein.

### Step 1: No-Load Voltage Test
Ghar ke sabhi heavy load (AC, geyser, motor) band karein. Multimeter ko AC Voltage range par set karke Main DB ke Phase aur Neutral busbar par probe lagayein. Agar reading **225V–235V** aati hai, toh grid supply healthy hai.

### Step 2: Under-Load Parallel Test (Sabse Zaroori)
![Low voltage testing flowchart meter incoming aur room socket comparison](/images/low-voltage-testing-flowchart.webp)

Ghar ka heavy load (AC ya geyser) ON karein. Ab multimeter se do points check karein:
* **Point A (DB Incoming Terminals):** Jahan meter ke baad main board me supply aati hai.
* **Point B (End Socket):** Jis room ya socket par appliance chal raha hai.

**Result Interpretation:**
* **Agar Point A par bhi voltage gir gayi:** Samasya ghar ke bahar hai (service cable, transformer ya phase overload) → DISCOM complaint banti hai.
* **Agar Point A standard 225V hai, par Point B par drop ho raha hai:** Samasya ghar ke internal DB joint, MCB contact ya patli wire ki hai → Private electrician se servicing karwayein.

### Step 3: Neutral–Earth Voltage Check
Load ON condition me Neutral link aur Grounded Earth busbar ke beech voltage check karein.
* **Healthy Reading:** 1V se 3V AC.
* **Fault Sign:** Agar yeh reading 15V se 45V tak shoot karti hai, toh iska matlab neutral line par high contact resistance ya loose terminal hai.

| Testing Scenario | Phase-Neutral (Under Load) | Neutral-Earth (Under Load) | Root Cause | Kise Theek Karna Hai? |
|---|---|---|---|---|
| **No-load par bhi 160V–180V** | 160V–180V | 1V–3V | Transformer / Grid fault | DISCOM Helpline (1912) |
| **Load ON hote hi DB drop** | 225V girkar 175V | Normal (1V–3V) | Service Line / Outer joint | DISCOM Lineman |
| **DB incoming safe, Socket drop** | Point A: 225V, Point B: 170V | 20V–45V | **DB Neutral loose / Internal wire** | Certified Electrician |
| **Padosi normal, aapka dim** | Padosi: 225V, Aapka: 170V | Normal | Phase Imbalance | DISCOM (Phase shift) |

> ⚠️ **Technical Warning:** Conductor resistance ya continuity testing **sirf main power switch OFF** karke karein. Live line par resistance mode lagane se multimeter ka fuse blast ho sakta hai.

---

## 4. Real-World Field Case (Electrician Ki Diary Se)

> ### 🛠️ Field Case: "AC Start Hote Hi Light Dim Aur Compressor Cut"

> ![Distribution board MCB loose terminal sparking aur burn mark](/images/author-pramod-site-inspection.webp)
>
> *Site inspection ke dauran mila loose terminal aur overheating ka live case: loose contact hone se terminal black ho gaya aur under-load voltage drop kar raha tha.*

> **Site:** Ek independent residential house.  
> **Problem:** 1.5 Ton inverter AC start hote hi ground floor ki LEDs jhilmilane lagti thi aur ceiling fan ki speed drop ho jati thi. Consumer ne local DISCOM me complaint ki, lekin department ne transformer healthy bata kar ticket band kar diya.
> 
> **Step-by-Step Field Diagnosis:**
> 1. Humne digital multimeter se Main DB incoming terminals par no-load voltage check ki: **228V AC (Normal supply)**.
> 2. Jaise hi AC aur geyser ON karwaya, socket par supply girkar **162V** ho gayi. Magar DB ke main incoming terminals par reading **224V** bani rahi. Isse confirm ho gaya ki grid supply bilkul theek hai aur drop ghar ke distribution board ke andar ho raha hai.
> 3. Under-load condition me Neutral aur Earth busbar ke beech testing karne par reading **42V AC** aayi!
> 4. **Root Cause:** Main DB ke neutral busbar par incoming main wire ko bina bimetallic lug lagaye screw ke neeche dabaya gaya tha. Contact dheela hone ki wajah se aluminium strand par oxide layer jam chuki thi aur wo joint under-load garam hokar resistance create kar raha tha.
> 
> **Solution:** Main isolator OFF karke wire ke oxidized hisse ko kaata gaya, heavy-duty bimetallic lug crimp kiya gaya aur terminal ko proper torque ke sath tight kiya gaya. Heavy load dobara chalane par Neutral-to-Earth voltage 2.1V par aa gayi aur socket voltage steady 221V par tiki rahi.

---

## 5. Khatarnak Jugaad: "Neutral Ko Earth Se Jodna" Kyun Jaanleva Hai?

Gaanv aur kasbon me kayi non-certified technicians low voltage dekhkar **main switch ke neutral terminal ko earth wire ke sath short kar dete hain**. Bulb tez jalne lagta hai, lekin yeh **IS 3043 earthing standards ke khilaf aur jaanleva jugaad** hai:

1. **Metal Body Shock Hazard:** Jaise hi system neutral me thoda bhi fault aayega, poore ghar ka return current geyser, washing machine aur fridge ki metal body par travel karne lagega.
2. **RCCB Tripping:** Agar ghar me life-saving 30mA RCCB lagi hai, toh neutral aur earth aapas me touch hote hi RCCB trip ho jayegi aur reset nahi hogi.
3. **Core Rule:** Neutral ek active current-carrying conductor hai, jabki Earthing sirf emergency protection path hai. Inhe main switchboard ke andar aapas me loop karna illegal hai.

Is topic ko vistaar se samjhein:  
👉 [Neutral Aur Earth Wire Mein Kya Antar Hai? Safety Rules Guide →](/articles/neutral-aur-earth-wire-mein-kya-antar-hai/)  
👉 [Earthing Types & cost: Ghar Mein Earthing Kaise Karein →](/articles/earthing-kya-hai/)

---

## 6. Dhyan Dein: Broken Neutral Se High Voltage (300V+) Ka Bada Khatra

Low voltage se bhi kayi guna zyada khatarnak hota hai **Open ya Broken Neutral** (न्यूट्रल का कट जाना).

Agar 3-phase supply me main transformer ya street pole se neutral wire achanak toot jaye ya disconnect ho jaye, toh circuit floating neutral par chala jata hai:
* Jis phase par load kam hoga, us phase se jude ghar me voltage achanak **280V se 400V tak shoot kar sakti hai**.
* Ek hi second me LED TV, fridge, inverter aur mobile chargers phuk jaate hain aur electrical fire ka risk ban jata hai.

**Aise me kya karein:** Agar ghar ke kuch bulbs achanak bohot tezz jalne lagein ya appliances se burning smell aaye, toh turant **Main Switch OFF karein**, sensitive equipment ke plugs nikalein aur **1912 par emergency complaint** karein.

Electrical aag aur shock protection ke liye padhein:  
👉 [Ghar Ki Electrical Safety: Shock Aur Aag Se Bachav Guide →](/articles/electric-shock-and-fire-safety-guide/)

---

## 7. Low Voltage Ka Sahi Aur Permanent Solution

### Step 1: Internal DB Box Terminals Tight Karwayein
Main power OFF karke DB box ke phase aur neutral link terminals ko tighten karwayein. Aluminium aur copper wires ke joints par proper crimping lugs ka use karein taaki galvanic corrosion na bane.

### Step 2: Heavy Load Ke Liye Dedicated Circuits
AC, geyser aur water pump ke liye dedicated lines chalayein. Geyser wiring ke safety parameters dekhne ke liye padhein:  
👉 [Geyser Lagane Se Pehle Kya Dhyan Rakhe? Wiring & Safety →](/articles/geyser-lagane-se-pehle-kya-dhyan-rakhe/)  
👉 [Winter Me Bijli Bill Kaise Kam Kare? 7 Smart Tips →](/articles/winter-me-bijli-bill-kaise-kam-kare/)

### Step 3: DISCOM 1912 Par Evidence Ke Sath Complaint
Agar fault Point A (DB incoming) par hai:
1. Multimeter ki reading aur video (time-stamp ke sath) record karein.
2. National helpline **1912** par call karke low voltage docket number lein.
3. Agar sub-station level par resolve na ho, toh state SERC Standards of Performance ke mutabiq consumer Consumer Grievance Redressal Forum (CGRF) aur Electricity Ombudsman ke paas appeal kar sakta hai.

### Step 4: Mainline Automatic Voltage Stabilizer
Agar transformer se ghar ki doori 400 meter se zyada hai aur grid terminal par hi steady low voltage rehti hai, toh ghar ke main supply par **100% Copper Wound Automatic Voltage Stabilizer (5 kVA ya 10 kVA)** lagana permanent solution hota hai.

* **Sasta Protection Option:** Agar mainline stabilizer ka budget na ho, toh individual heavy appliances ke liye **Digital Voltage Protector Plug** lagayein jo supply 170V se neeche girte hi motor ko disconnect karke winding safe rakhta hai.

Stabilizer sizing aur appliance safety guide ke liye padhein:  
👉 [Stabilizer Kya Hota Hai? AC, Fridge Aur Mainline Guide →](/articles/stabilizer-kya-hota-hai-ac-fridge-tv-guide/)

---

## 8. Aksar Pooche Jaane Wale Sawal (FAQs)

### Q1. Ghar me kitni voltage normal hoti hai?
Single-phase residential supply me standard voltage 230V AC hoti hai. State Electricity Supply Code ke mutabiq ±6% variation permissible hota hai, yaani lagbhag 216V se 244V ke beech supply normal aur safe maani jaati hai.

### Q2. Kya low voltage me Fridge aur AC chalana chahiye?
Nahi, lagatar nahi chalana chahiye. Kam voltage par compressor motors rated power deliver karne ke liye excessive current draw karti hain, jisse winding over-heat hoti hai aur motor ka thermal overload protector trip hota hai. Aise me voltage protector use karein ya equipment switch off rakhein.

### Q3. Loose neutral ko kaise pehchanein?
Heavy load (geyser ya AC) ON karte hi pure ghar ki lights dim ho jana aur load band karte hi wapas normal ho jana loose neutral ka classic lakshan hai. Multimeter se under-load Neutral-to-Earth voltage check karne par agar reading 15V se zyada aaye, toh neutral terminal loose hota hai.

### Q4. Kya transformer se doori low voltage ki wajah banti hai?
Haan. Distribution transformer se ghar jitna door hota hai, purani LT overhead line ke internal impedance aur resistance ke chalte consumer terminal tak aate-aate line voltage drop ho jati hai, khaaskar peak load hours ke dauran.

### Q5. Kya stabilizer lagane se bijli ka bill badhta hai?
Haan, thoda sa badhta hai. Automatic voltage stabilizer ke internal copper coil aur circuits ke kaaran lagbhag 2% se 4% ka nominal no-load power loss hota hai, lekin yeh cost mehenge compressor aur motor ko jalne se bachane ke liye safe investment hai.

### Q6. Low voltage ki complaint bijli vibhag me kaise karein?
Multimeter se no-load aur load voltage reading note karein aur national toll-free number 1912 par call karke complaint register karwayein. Official docket number lein taaki resolution na milne par CGRF portal par escalate kiya ja sake.

### Q7. Padosi ke ghar light tezz aur mere yahan dim kyun hoti hai?
Iska kaaran 3-phase supply ka phase imbalance hota hai. Gali ke khambe par aapka meter kisi overloaded phase se juda ho sakta hai jabki padosi ka connection kam load wale phase par chal raha hota hai.

### Q8. Kya neutral aur earth jodne se voltage badh jati hai?
Light tezz jal sakti hai, lekin yeh kanoonan apradh aur jaanleva jugaad hai. Isse pure ghar ke metal appliances ki body par return current daudne lagta hai, shock ka risk badh jata hai aur 30mA RCCB turant trip hone lagti hai.

---

## Final Verdict & Expert Advice

Low voltage ko kabhi bhi "aam baat" samajhkar ignore na karein. Yeh dheere-dheere aapke motor windings, BLDC circuits aur compressor life ko aadhi kar deta hai. 

Hamesha **safe aur legal testing** karein: Pehle apne internal DB box ke neutral connections check karwayein. Agar samasya bahar se hai, toh 1912 par evidence ke sath complaint darj karein ya standard mainline copper stabilizer install karein.

---

### ⚡ Related Guides
- 🔌 [MCB Box (DB Box) Kaise Chune? Ways, Price & Wiring Rules](/articles/mcb-box-db-box-kaise-chune/)
- 📏 [House Wiring Wire Size Chart: Kaunsi Wire Best Hai?](/articles/ghar-ki-wiring-wire-size-guide/)
- 🧮 [Home Electrical Load Calculation](/articles/home-electrical-load-calculation/)
- 🔧 [MCB Selection Guide: Sahi MCB Kaise Chune?](/articles/mcb-types-selection-guide/)
- 🌍 [Earthing Kya Hai? Ghar Me Earthing Kaise Kare](/articles/earthing-kya-hai/)
- 🧯 [Ghar Me RCCB Lagana Kyun Zaruri Hai?](/articles/ghar-mein-rccb-lagana-kyun-zaruri-hai/)
- ⚡ [Neutral Aur Earth Wire Mein Antar: Wiring & Safety Rules](/articles/neutral-aur-earth-wire-mein-kya-antar-hai/)
- 🛡️ [Stabilizer Kya Hota Hai? AC, Fridge, TV Guide](/articles/stabilizer-kya-hota-hai-ac-fridge-tv-guide/)

---

### ⚠️ Safety & Legal Disclaimer
Yeh guide purely technical education aur safety awareness ke liye taiyar ki gayi hai. Energy meter, cutout seal aur 3-phase LT khambe par kaam karna DISCOM ka kanooni adhikar hai; meter ki seal kholna ya chhedna dandniya jurm hai. Ghar ke distribution board aur wiring ka kaam hamesha government-licensed certified electrician se hi karwayein aur kaam se pehle main supply isolate karein.