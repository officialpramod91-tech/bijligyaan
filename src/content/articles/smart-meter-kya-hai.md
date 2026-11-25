---
title: "Smart Meter Kya Hai? Reading, Recharge Aur Bill Guide (2026)"
description: "Smart meter kya hai (what is a smart meter in India) aur kaise kaam karta hai? Reading codes (1.8.0/2.8.0), balance check, ToD tariff, bill badhne ki wajah aur safety guide."
pubDate: 2026-11-25
category: "solar-smart-energy"
readTime: "9 min read"
author: "Er. Pramod Kumar"
tags: ["स्मार्ट मीटर क्या है", "Smart Meter Kya Hai", "Smart Meter Kaise Kaam Karta Hai", "Smart Meter Tez Chalta Hai Kya", "Prepaid Smart Meter Balance Check", "Smart Meter Reading Kaise Dekhe", "What is a Smart Meter in India"]
image: "/images/smart-meter-kya-hai-guide-2026.webp"
imageAlt: "Smart meter kya hai, reading codes, recharge, ToD tariff aur electrician wiring safety guide 2026"
---

**Hindi me:** स्मार्ट मीटर क्या है (What is a Smart Meter in India), यह कैसे काम करता है, रीडिंग कोड्स (1.8.0 / 2.8.0), बैलेंस चेक, ToD टैरिफ, मीटर बदलने के दिन की चेकलिस्ट और इलेक्ट्रिकल सेफ्टी गाइड।  

> **About the Author:** **Er. Pramod Kumar** is an electrical maintenance professional with **10+ years of field experience** in electrical wiring, distribution panels, motor control systems, and electrical troubleshooting. This guide combines practical electrical knowledge with BIS/CEA standards and DISCOM consumer rules.

> **Quick Summary (संक्षेप में):**
> - **Smart Meter Kya Hai:** Ye ek advanced digital electricity meter (BIS **IS 16444**) hai jo ghar ki bijli khapat (`kWh` / `kVAh`) ko accurately measure aur store karta hai, aur communication module ke zariye **AMI (Advanced Metering Infrastructure)** network se DISCOM server tak data bhejta hai.
> - **Bill Badhne Ki Asli Wajah:** Smart meter khud se zyada unit nahi banata—iski accuracy BIS standard par depend karti hai. Bill badhne ke peeche aksar **purani estimated/under-billing ka khatam hona, mausam ka load, slab jump, prepaid me daily deduction ka dikhna, ya galat inverter neutral wiring** jaise kaaran hote hain.
> - **ToD Tariff & MD Rule:** Electricity (Rights of Consumers) Amendment Rules ke tahat smart meter consumers ke liye **Time-of-Day (ToD)** tariff aur purane period ke Maximum Demand (MD) par retroactive penalty se bachav ke pravdhan diye gaye hain.
> - **Meter Badalte Din Ka Rule:** Purane meter ki final reading aur naye meter ki starting reading, serial number aur seal ki photo zaroor lein.

**Is guide me:** [Smart Meter Kya Hai](#what-is) · [Postpaid vs Prepaid & Price](#price) · [Meter Badalte Din Ka Checklist](#install-checklist) · [Reading Codes (1.8.0 / 2.8.0)](#reading) · [Balance Check & Alerts](#recharge) · [Smart Meter Tez Kyun Lagta Hai?](#fast-myth) · [ToD Tariff & Disconnection Rules](#rules) · [Testing & Complaint](#testing) · [Field Scenarios](#field-cases) · [IS 732 & CEA Safety](#safety) · [FAQs](#faqs)

Aaj kal har gali-mohalle me ek hi charcha hai—*“Bhai smart meter lag gaya”*, *“Smart meter tez chalta hai kya”*, ya *“Balance zero hote hi light kat jayegi”*। Pichhle **10+ saal ke electrical field experience** me maine dekha hai ki jab bhi kisi ghar me smart meter lagta hai, log sabse pehle meter ko dosh dete hain, jabki asli confusion **purani estimated billing, galat inverter neutral connection, ya prepaid rules ki jaankari na hone** se paida hoti hai।

Is pillar guide me main aapko ek practical electrician ke nazariye se simple bhasha me samjhaunga ki **smart meter kya hota hai, ye kaise kaam karta hai, iske display codes kaise padhte hain, aur apni wiring ko safe kaise rakhein**.

---

## <a id="what-is"></a>1. Smart Meter Kya Hota Hai Aur Kaise Kaam Karta Hai?

**Smart Meter** ek advanced digital electricity meter hai jo ghar ya dukaan ki bijli khapat (`kWh` / `kVAh`) ko accurately measure aur store karta hai। Isme ek communication module hota hai, jo **AMI (Advanced Metering Infrastructure)** network ke through meter data DISCOM (bijli vibhag) ke server tak bhejta hai।

*(Technical Clarification: Smart Meter aur AMI ek hi cheez nahi hain—Smart Meter ek electronic energy meter hai, jabki AMI ek poora system hai jisme Smart Meter, Communication Network, Head-End System (HES) aur Meter Data Management System (MDMS) shamil hote hain। Saath hi, har smart meter har second real-time data nahi bhejta; data transmission ka interval meter configuration aur DISCOM network par depend karta hai।)*

### Smart Meter Kaise Kaam Karta Hai (4 Steps):
![Smart Meter Kaise Kaam Karta Hai Step-by-Step AMI Process Diagram](/images/smart-meter-working-diagram.webp)
1. **Energy Measurement:** Meter ke sensors kharch hone wali energy (`kWh` / `kVAh`) ko measure karke internal memory me store karte hain।
2. **AMI Data Transfer:** Scheduled intervals par meter ka communication module data DISCOM server ko bhejta hai—ab meter reader ke ghar aane aur galat/average reading banne ki samasya kam hoti hai।
3. **App & Billing Update:** Server reading process karke prepaid balance se daily deduction karta hai ya postpaid bill generate karta hai।
4. **Remote Connect / Disconnect:** BIS **IS 16444 (Part 1)** ke anusaar smart meter me internal connect/disconnect switch hota hai, jisse DISCOM server se authorized command par supply ON/OFF ki ja sakti hai।

---

## <a id="price"></a>2. Postpaid vs Prepaid Smart Meter Aur Price

### Postpaid vs Prepaid Smart Meter Me Kya Farq Hai?
* **Postpaid Smart Meter:** Isme aap pehle bijli use karte hain aur mahine ke ant me bill bharne ka option milta hai (reading server par auto-transfer hoti hai)।
* **Prepaid Smart Meter:** Isme mobile sim ki tarah pehle balance recharge karna padta hai aur daily consumption ke hisaab se balance ghat-ta rehta hai। Kuch states me consumer ko postpaid ya prepaid mode chunne ka option bhi milta hai—apne state DISCOM ke niyam dekhein।

### Smart Meter Ka Price Kya Hai? (Kya Paise Dene Honge?)
* **Purana Meter Replace Karne Par (RDSS):** Bharat sarkar ki **RDSS (Revamped Distribution Sector Scheme)** ke tahat purane meters ko smart meter se badalne par zyadatar states me consumer se **upfront meter ki keemat nahi li jati**।
* **Naya Connection Lene Par:** Naya electricity connection lete samay state DISCOM ke tariff order ke anusaar meter cost ya security deposit jama karna pad sakta hai।
* **UPPCL Example:** Uttar Pradesh (UPPCL — [www.uppcl.org](https://www.uppcl.org)) ke rules ke anusaar purane consumers ke liye meter replacement muft hai, naye connection par meter cost lagu hoti hai, aur **prepaid balance positive rakhne par energy charges me 2% ki atirikt chhoot** ka pravdhan hai।

---

## <a id="install-checklist"></a>3. Meter Badalte Din Ka 6-Point Electrician Checklist

Jab DISCOM team aapke ghar ka purana meter hatakar naya smart meter lagane aaye, to ye **6 kaam usi waqt zaroor karein**:

1. **Purane Meter Ki Final Reading Photo:** Purana meter utarne se pehle uski display reading (`kWh`), serial number aur body condition ki clear photo/video mobile me lein।
2. **Naye Meter Ki Starting Reading Photo:** Naya smart meter lagte hi uski initial reading (aam taur par `000000` ya test units) ki photo lein।
3. **Serial Number Aur Seal Check:** Sealing certificate par likhe meter serial number aur seal number ko meter par lagi physical seal se match karein।
4. **Inverter Neutral Aur Earth Check:** Meter badalne ke baad electrician se confirm karein ki main incoming phase aur neutral sahi polarity par jude hain aur inverter ka neutral mix nahi ho raha।
5. **Sealing Certificate Ki Copy Lein:** DISCOM technician se installation/sealing report ki signed copy ya SMS/app confirmation zaroor lein।
6. **Sanctioned Load Match Karein:** Receipt par check karein ki aapka sanctioned load (kW) wahi darj hai jo aapke purane bill par tha।

---

## <a id="reading"></a>4. Smart Meter Reading Kaise Check Karein? (OBIS Codes 1.8.0 / 2.8.0)

Smart meter ke front panel par lage **Push Button** ko dabane par screen par alag-alag parameters dikhte hain। Kai meters me standard **OBIS Codes** aate hain, jabki kuch models me seedha `kWh` ya `MD` likha hota hai *(exact sequence ke liye apne meter model ka manual dekhein)*:

| OBIS Code / Display | Technical Naam | Aapke Liye Aasaan Matlab |
|---|---|---|
| **`1.8.0` / `kWh`** | Import Active Energy | Grid se ab tak li gayi kul **units** (normal domestic billing isi par hoti hai)। |
| **`2.8.0` / `Exp kWh`** | Export Active Energy | Solar panel se grid ko bheji gayi kul units: **[export aur import ki reading ka hisaab](/articles/solar-net-metering-kya-hai/)**। |
| **`1.7.0` / `kW`** | Instantaneous Active Power | Is waqt aapke ghar me kitne kW/watt load chal raha hai। |
| **`2.7.0`** | Instantaneous Export Power | Solar se is waqt grid me kitni power ja rahi hai। |
| **`1.6.0` / `MD`** | Maximum Demand (MD) | Billing cycle me ek saath chalaya gaya sabse zyada **kW/kVA load**। |
| **`32.7.0` / `V`** | Phase Voltage (L1) | Ghar me aa rahi supply ka live voltage। |
| **`kVAh`** | Apparent Energy | Active + Reactive energy (sirf un connections par jahan kVAh tariff lagu hai)। |

---

## <a id="recharge"></a>5. Balance Check, Recharge Aur Low-Balance Alerts

Apne smart meter ka balance check aur recharge karne ke liye hamesha **apne DISCOM ki official website** (jaise UP ke liye [www.uppcl.org](https://www.uppcl.org)) ya **apne state DISCOM ki official mobile app** ka hi istemal karein।

* **UPI Apps Se Recharge:** Aap PhonePe, Google Pay ya Paytm ke *Electricity / Prepaid Meter* section me apna board aur Consumer ID daalkar bhi recharge kar sakte hain।
* **Low-Balance Alerts Kaise Set Karein:** Apne DISCOM ke consumer portal ya official app me apna **active mobile number aur email ID** update rakhein। Zyadatar prepaid systems me balance **30%, 10% aur zero balance** par automated SMS/app alerts bheje jate hain taaki aap samay par recharge kar sakein।

---

## <a id="fast-myth"></a>6. Smart Meter Tez Kyun Lagta Hai? (Asli Technical Kaaran)

Sabse pehle ye baat clear samajh lein: **Smart meter ka matlab ye nahi hai ki wo har purane meter se zyada units record karega।** Iski measurement accuracy applicable BIS standard (**IS 16444** — Class 1 ya Class 2) aur meter ki technical specifications ke anusaar hoti hai।

Phir bhi, smart meter lagne ke baad bill badha hua lagne ke peeche ye **5 asli kaaran** hote hain:

1. **Pehle Estimated Ya Under-Billing Hona:** Purane meter me reading delay hone ya average bill banne se kam units aati thin। Smart meter se har mahine ki exact units aane par consumption higher tariff slab me ja sakta hai: **[slab jump se bijli bill kaise badhta hai](/articles/bijli-ka-bill-zyada-kyun-aata-hai/)**।
2. **Mausam Ka Load Aur Prepaid Visibility:** Garmi ya sardi me AC, cooler, geyser ya heater chalne par daily units badhti hain—prepaid me roz balance ghat-ta dikhne par ye achanak zyada mehsoos hota hai।
3. **Purane Inverter Ki Galat Neutral Wiring:** Purane gharon me kai baar inverter ke phase aur neutral ki wiring sahi se separate nahi hoti, ya circuits ka neutral shared rehta hai। Kuch smart meters me neutral current monitoring hoti hai, jo galat return path ko abnormal current ya tamper event ke roop me detect kar sakti hai। Samjhein: **[neutral aur earth ko alag kyun rakhte hain](/articles/neutral-aur-earth-wire-mein-kya-antar-hai/)**।
4. **kWh vs kVAh Billing (Power Factor):** Jin connections par state tariff order ke anusaar **kVAh** billing lagu hai, wahan Power Factor (`kW ÷ kVA`) asar dalta hai। *Udaharan:* Agar average power factor **0.80** hai, to **1 kWh** active energy ke liye meter lagbhag **1.25 kVAh** apparent energy record karega (constant power factor maante hue)।
5. **Damaged Wiring Me Leakage Current:** Agar kisi appliance ya purani wire ke damaged insulation se phase-to-earth leakage flow ho raha hai, to meter ki measurement arrangement ke anusaar ye energy register ho sakti hai। *(Note: Aam 30 mA leakage sirf ~7 W ya lagbhag 5 units/mahina hoti hai—isliye har bade bill ka kaaran sirf earth leakage nahi hota।)*

---

## <a id="rules"></a>7. ToD Tariff, Maximum Demand (MD) Aur Disconnection Rules

### 1. Time-of-Day (ToD) Tariff Kya Hai?
**Electricity (Rights of Consumers) Amendment Rules, 2023** ke tahat smart meter consumers ke liye **ToD (Time-of-Day) tariff** ka pravdhan laya gaya hai—jisme din ke **solar hours** (aam taur par subah se sham ke 8 ghante) ke dauran bijli dar sasti (rules me kam se kam 20% tak kam; PIB ke anusaar 10%–20% kam) aur **peak hours** (sham/raat ke vyast ghanton) me 10%–20% tak zyada rakhne ka framework hai। States me iska implementation phased tarike se chal raha hai aur deadlines ko lekar 2026 ke draft amendments bhi charcha me hain—apne state tariff order me check karein ki aapki category par ToD lagu hai ya nahi।

### 2. Maximum Demand (MD) Penalty Ka Niyam
Consumer Rules amendment ke anusaar smart meter lagne se pehle ke period ki recorded Maximum Demand (MD) ke aadhar par pichhli tareekh se penalty na lagane ka suraksha pravdhan diya gaya hai। Aage ke liye apne ghar ka load sahi calculate karke sanctioned load update rakhein: **[sanctioned load aur connected load ka hisaab](/articles/home-electrical-load-calculation/)**।

### 3. Prepaid Balance Zero Hone Par Disconnection Rules
Disconnection ke niyam **har state DISCOM aur SERC ke anusaar alag hote hain**:
* **UPPCL Example (Uttar Pradesh):** UPPCL ke rules ke anusaar zero balance hone ke baad **3 din tak ya ₹200 tak (2 kW tak ke load par)** supply nahi kaati jati, aur **evening, Sunday aur public holidays** me disconnection nahi hota। Purane meter se prepaid smart meter me conversion par **30 din ka grace period** diya jata hai। *(Anya states me apne DISCOM ka official tariff order/FAQ dekhein।)*
* **Negative Balance Kyun Dikhta Hai:** Purana arrear, fixed monthly charges, ya previous adjustments deduct hone par balance minus (`-₹`) me dikh sakta hai।

---

## <a id="testing"></a>8. Smart Meter Testing Aur Bill Ki Shikayat Kaise Karein?

Agar aapko meter ki accuracy par shaq hai, to aapko **meter testing karwane ka poora adhikar** hai:

1. **Zero-Load Switch Off Test:** Ghar ke saare switches, inverter plug, stabilizer aur chargers band karke display par instantaneous load (`1.7.0` / `kW`) dekhein।
2. **Official Complaint Darj Karein:** Apne DISCOM ke helpline number (jaise UP/Bihar me **1912**), official portal (jaise [www.uppcl.org](https://www.uppcl.org)) ya nearest sub-division office me **Meter Testing / Check Meter** ke liye complaint darj karein।
3. **Check Meter Verification:** DISCOM ki team aapke meter ke series me ek calibrated **Check Meter** lagakar ya lab me accuracy check karti hai। Faulty niklne par bill adjust hota hai; sahi niklne par nominal testing fee lagu ho sakti hai।

---

## <a id="field-cases"></a>9. Typical Field Scenarios (Electrician Observations)

> Ye **illustrative field scenarios** hain jo gharon ki wiring inspection me dekhne ko milte hain:

### Scenario 1: Ghar Band Rehne Par Bhi Daily Units Badhna
**Observation:** Agar ghar me koi bhula hua connected load (jaise geyser thermostat stuck hona, submersible/booster pump auto-on rehna, ya unauthorized tapping) lagatar **450W (0.45 kW)** 24 ghante chalta rahe, to `0.45 kW × 24 hours = 10.8 units/day` kharch ho sakti hain। *(Itna zyada current 30 mA earth leakage nahi ho sakta, warna main RCCB turant trip kar jati।)*  
**Field Check:** Main DB se ek-ek circuit ki MCB gira kar `1.7.0` live load check karne par faulty circuit turant pakda jata hai।

### Scenario 2: Heavy Load Chalate Hi Temporary Supply Cut
**Observation:** Kuch smart meters aur DISCOM configurations me load limiter feature hota hai—sanctioned load exceed hone par warning ya configured temporary disconnection ho sakta hai।

### Scenario 3: Voltage Abnormal Hone Par Meter Display Issue
**Observation:** Supply neutral loose hone ya external supply fault/internal power supply issue se meter display blank ho sakta hai: **[ghar me low aur high voltage fluctuation ki wajah](/articles/ghar-me-low-voltage-kyun-aati-hai/)**।

---

## <a id="safety"></a>10. Smart Meter Wiring Aur Electrical Safety (IS 732 & CEA Regulations)

Ghar ke main distribution board (DB) aur earthing ko surakshit rakhne ke liye in Indian electrical standards ka palan zaroori hai:

| Standard / Regulation | Scope Aur Matlab |
|---|---|
| **IS 16444 (Part 1)** | AC static direct-connected Smart Meters ki measurement, communication aur internal connect/disconnect switch requirements। |
| **IS 13779** | AC static watthour meters (Class 1 & 2) ki general aur accuracy requirements। |
| **IS 732:2019** | Residential electrical wiring installation, conductor sizing aur protective devices ka code of practice। |
| **IS 3043** | Earthing installation aur testing ka code of practice। |
| **IS 12640 (Part 1) / IEC 61008-1** | Residual Current Operated Circuit-Breakers (RCCB) ki requirements। |
| **CEA Safety Regulations, 2023 (& Applicable Amendments)** | Domestic installation me 30 mA RCD/RCCB ka provision aur qualified/licensed person dwara installation। |

### Electrician Ki Zaroori Safety Tips:
1. **30 mA RCCB / RCBO Lagwayein:** Main distribution board me suitable MCB ke saath **30 mA RCCB/RCBO** lagwana chahiye। **RCCB earth leakage detect karke supply disconnect karti hai aur electric shock se bachati hai, lekin ye overload protection ka replacement nahi hai aur na hi leakage se kharch hui units ko rokti hai:** **[RCCB bill nahi, shock se bachati hai](/articles/ghar-mein-rccb-lagana-kyun-zaruri-hai/)**।
2. **Proper Earthing Testing:** Neutral-to-earth voltage ko load condition ke saath measure karke interpret karna chahiye—sirf ek voltage reading se earthing sahi ghoshit nahi hoti। **Earthing continuity, earth electrode resistance aur earth fault loop impedance** ki proper testing electrician se karwayein: **[ghar me earthing testing aur installation ka tarika](/articles/earthing-kya-hai/)**।
3. **Meter Seal Se Chhedchhad Na Karein:** Smart meter me tamper detection sensors hote hain—seal todne ya bypass karne par legal action aur bhaari penalty lag sakti hai।

---

## <a id="faqs"></a>11. Aksar Pooche Jaane Wale Sawal (FAQs)

### 1. Smart meter kya hota hai?
Smart meter ek advanced digital electricity meter (IS 16444) hai jo bijli khapat (`kWh`/`kVAh`) ko accurately measure aur store karta hai, aur communication module ke zariye AMI network se DISCOM server ko data bhejta hai।

### 2. Kya smart meter purane meter se tez chalta hai?
Nahi, smart meter ka matlab ye nahi hai ki wo purane meter se zyada units banayega—iski accuracy BIS standard aur meter ki accuracy class par depend karti hai। Bill badhne ke peeche aksar purani estimated/under-billing ka khatam hona, mausam ka load, slab jump, ya galat inverter neutral wiring jaise kaaran hote hain।

### 3. Smart meter me balance zero hone par kya turant light kat jati hai?
Disconnection ke niyam state DISCOM ke anusaar alag hote hain। Udaharan ke liye, UPPCL ke rules ke anusaar zero balance ke baad 3 din tak ya ₹200 tak (2 kW tak ke load par) supply nahi kaati jati, aur evening, Sunday aur public holidays me disconnection nahi hota।

### 4. Smart meter ka balance check aur recharge kaise karein?
Apne state DISCOM ki official website (jaise UP ke liye www.uppcl.org) ya apne DISCOM ki official mobile app par Consumer ID se login karke balance check aur online recharge karein।

### 5. Smart meter ki screen par reading (1.8.0 aur 2.8.0) kaise dekhein?
Meter ke push button ko dabane par screen par parameters dikhte hain। Kai meters me OBIS codes aate hain, jaise `1.8.0` (Import kWh), `2.8.0` (Export kWh), `1.7.0` (Instantaneous kW load), aur `1.6.0` (Maximum Demand)।

### 6. Kya smart meter lagwane ka paisa dena padta hai?
RDSS yojana ke tahat purane meter ko replace karne par zyadatar states me upfront meter cost nahi li jati, jabki naye connection par state tariff order ke anusaar meter cost ya security deposit dena pad sakta hai।

### 7. Time-of-Day (ToD) tariff smart meter par kaise kaam karta hai?
Electricity (Rights of Consumers) Amendment Rules, 2023 ke tahat smart meter consumers ke liye din ke solar hours me sasti bijli dar aur peak hours me zyada dar ka framework hai—apne state DISCOM ke latest tariff order me check karein ki ye aapke connection par lagu hai ya nahi।

### 8. Smart meter ka balance minus (negative) me kyun dikhta hai?
Balance minus me dikhne ke peeche purana arrear/outstanding dues, fixed monthly charges, minimum charges ya previous billing adjustments ho sakte hain jo system dwara deduct kiye jate hain।

### 9. Smart meter ki testing kaise karwayein?
Agar aapko meter accuracy par shaq hai, to apne DISCOM ke helpline number (jaise 1912), official portal ya sub-division office me written complaint dekar Check Meter ya lab testing karwayein।

### 10. Kya smart meter bina mobile network ke kaam karta hai?
Haan, communication network fail hone par bhi smart meter ke andar units ki measurement aur storage lagatar chalti rehti hai। Network wapas aane par stored data server par sync ho jata hai।

### 11. Kya smart meter ke saath solar net metering chal sakti hai?
Haan, smart meter bi-directional measurement (`1.8.0` Import aur `2.8.0` Export) support kar sakta hai, lekin solar net metering ke liye DISCOM se meter ko net-metering mode me configure karwana zaroori hota hai।

### 12. Kya smart meter ko khud se hata sakte hain?
Nahi, meter lagane aur badalne ka adhikar keval distribution licensee (DISCOM) ke paas hota hai। Meter ko khud se hatane, seal todne ya bypass karne ki koshish Electricity Act ke tahat kanooni apradh hai।

---

### Official Sources & References
- **BIS Standards:** IS 16444 (Part 1) & IS 13779 (Bureau of Indian Standards)
- **CEA Regulations:** Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023 & Applicable Amendments
- **Ministry of Power (ToD & Consumer Rules):** Electricity (Rights of Consumers) Amendment Rules, 2023 & Draft Amendments
- **UPPCL Official Portal:** Uttar Pradesh Power Corporation Limited ([www.uppcl.org](https://www.uppcl.org))

---

### 💡 Related Guides
- [Sanctioned load aur connected load ka hisaab](/articles/home-electrical-load-calculation/)
- [Neutral aur earth ko alag kyun rakhte hain](/articles/neutral-aur-earth-wire-mein-kya-antar-hai/)
- [RCCB bill nahi, shock se bachati hai](/articles/ghar-mein-rccb-lagana-kyun-zaruri-hai/)
- [Ghar me earthing testing aur installation ka tarika](/articles/earthing-kya-hai/)
- [Slab jump se bijli bill kaise badhta hai](/articles/bijli-ka-bill-zyada-kyun-aata-hai/)
- [Export aur import ki reading ka hisaab](/articles/solar-net-metering-kya-hai/)

---

### ⚠️ Disclaimer
Ye article **sirf jaankari aur consumer awareness** ke liye hai। Smart meter recharge rules, friendly hours, ToD tariff implementation, monthly charges aur tariff slabs har state DISCOM ke latest tariff order aur SERC regulations ke anusaar alag ho sakte hain; apne connection ke exact niyam ke liye apne bijli vibhag ki official website ya app dekhein। **Meter seal, service cable ya main DB box me kisi bhi tarah ka electrical kaam keval qualified/licensed electrician** se IS 732:2019 aur CEA Safety Regulations ke anusaar karwayein। Ye legal ya engineering advice nahi hai, aur author kisi bhi galat wiring ya unauthorized chhedchhad se hone wale nuksan ke liye zimmedar nahi hoga।

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Smart meter kya hota hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smart meter ek advanced digital electricity meter (IS 16444) hai jo bijli khapat (kWh/kVAh) ko accurately measure aur store karta hai, aur communication module ke zariye AMI network se DISCOM server ko data bhejta hai."
      }
    },
    {
      "@type": "Question",
      "name": "Kya smart meter purane meter se tez chalta hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nahi, smart meter ka matlab ye nahi hai ki wo purane meter se zyada units banayega—iski accuracy BIS standard aur meter ki accuracy class par depend karti hai. Bill badhne ke peeche aksar purani estimated/under-billing ka khatam hona, mausam ka load, slab jump, ya galat inverter neutral wiring jaise kaaran hote hain."
      }
    },
    {
      "@type": "Question",
      "name": "Smart meter me balance zero hone par kya turant light kat jati hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Disconnection ke niyam state DISCOM ke anusaar alag hote hain. Udaharan ke liye, UPPCL ke rules ke anusaar zero balance ke baad 3 din tak ya ₹200 tak (2 kW tak ke load par) supply nahi kaati jati, aur evening, Sunday aur public holidays me disconnection nahi hota."
      }
    },
    {
      "@type": "Question",
      "name": "Smart meter ka balance check aur recharge kaise karein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apne state DISCOM ki official website (jaise UP ke liye www.uppcl.org) ya apne DISCOM ki official mobile app par Consumer ID se login karke balance check aur online recharge karein."
      }
    },
    {
      "@type": "Question",
      "name": "Smart meter ki screen par reading (1.8.0 aur 2.8.0) kaise dekhein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meter ke push button ko dabane par screen par parameters dikhte hain. Kai meters me OBIS codes aate hain, jaise 1.8.0 (Import kWh), 2.8.0 (Export kWh), 1.7.0 (Instantaneous kW load), aur 1.6.0 (Maximum Demand)."
      }
    },
    {
      "@type": "Question",
      "name": "Kya smart meter lagwane ka paisa dena padta hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RDSS yojana ke tahat purane meter ko replace karne par zyadatar states me upfront meter cost nahi li jati, jabki naye connection par state tariff order ke anusaar meter cost ya security deposit dena pad sakta hai."
      }
    },
    {
      "@type": "Question",
      "name": "Time-of-Day (ToD) tariff smart meter par kaise kaam karta hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Electricity (Rights of Consumers) Amendment Rules, 2023 ke tahat smart meter consumers ke liye din ke solar hours me sasti bijli dar aur peak hours me zyada dar ka framework hai—apne state DISCOM ke latest tariff order me check karein ki ye aapke connection par lagu hai ya nahi."
      }
    },
    {
      "@type": "Question",
      "name": "Smart meter ka balance minus (negative) me kyun dikhta hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Balance minus me dikhne ke peeche purana arrear/outstanding dues, fixed monthly charges, minimum charges ya previous billing adjustments ho sakte hain jo system dwara deduct kiye jate hain."
      }
    },
    {
      "@type": "Question",
      "name": "Smart meter ki testing kaise karwayein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agar aapko meter accuracy par shaq hai, to apne DISCOM ke helpline number (jaise 1912), official portal ya sub-division office me written complaint dekar Check Meter ya lab testing karwayein."
      }
    },
    {
      "@type": "Question",
      "name": "Kya smart meter bina mobile network ke kaam karta hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Haan, communication network fail hone par bhi smart meter ke andar units ki measurement aur storage lagatar chalti rehti hai. Network wapas aane par stored data server par sync ho jata hai."
      }
    },
    {
      "@type": "Question",
      "name": "Kya smart meter ke saath solar net metering chal sakti hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Haan, smart meter bi-directional measurement (1.8.0 Import aur 2.8.0 Export) support kar sakta hai, lekin solar net metering ke liye DISCOM se meter ko net-metering mode me configure karwana zaroori hota hai."
      }
    },
    {
      "@type": "Question",
      "name": "Kya smart meter ko khud se hata sakte hain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nahi, meter lagane aur badalne ka adhikar keval distribution licensee (DISCOM) ke paas hota hai. Meter ko khud se hatane, seal todne ya bypass karne ki koshish Electricity Act ke tahat kanooni apradh hai."
      }
    }
  ]
}
</script>