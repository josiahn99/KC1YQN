---
layout: default
title: notes
---

# notes

## nets

### [Heavy Hitters Traffic Net](https://ema.arrl.org/heavy-hitters-traffic-net/)
9:45 pm nightly  

Boston, MA – W1BOS – 145.230(-), PL 88.5 Hz  
Mendon, MA – K1KWP – 146.610(-), PL 146.2 Hz  

---

### [George's Old Timers Net](http://www.georgesoldtimersnet.com/)
7:30 pm nightly  

Paxton, MA – W1BIM – 146.970(-), PL 114.8 Hz  

---

### [NEDECN DMR Nets](https://nedecn.org/about-nedecn/dmr-nets/)
New England DMR Net – 8 pm Mondays  

Southborough, MA – AE1C – 145.270(-), CC 7  

---

## field notes

---

### February Update

January was my first full month with the Anytone 878. I feel like I’ve got the basics down now — codeplugs make sense, BrandMeister isn’t intimidating anymore, and the hotspot behaves mostly the way I expect it to. Still a beginner, but not lost.

February moved fast, but it also feels like I’ve learned so much that it’s been longer than it actually has. Less structured, more exploring.

At the beginning of the month, I had my first ISS reception. I used an ISS tracker app and caught an afternoon pass at ~80° elevation. I heard stations from Iowa, Ohio, and Connecticut via the International Space Station.

Accommodating Doppler shift during the 10-minute pass was the highlight. Physics felt immediate.

#### Programming + Radio

I finally had a reason to use a Raspberry Pi via Pi-Star. Learned basic Linux CLI skills (git, ssh, nano, sudo, config editing).

Wrote a Python script to parse Pi-Star logs → JSON → push to my site using the GitHub API. Site is hosted on GitHub Pages.

Simplified infrastructure after abandoning Cloudflare Workers. Static site + focused Python scripts is the right level of complexity.

I focus on understanding concepts over memorizing syntax.

Now I have a live dataset updating automatically. Potential extensions:
- Geographic tagging
- Time-of-day analysis
- Pattern visualization

Small system. Real infrastructure.

#### Operating

Mostly TG3100 (USA) and TG91 (Worldwide).

When tired, I don’t feel like talking. Most available time is when tired.

Goal: 100–300 QSOs this year. Enough for experience, not vanity metrics.

I need to key up more. This is a communication hobby.

#### What’s Driving This

It’s the science.

I want to understand *why* it works.

Influenced heavily by *Remembrance of Earth’s Past* by Cixin Liu. It made electromagnetic theory feel consequential.

Currently halfway through *The Radio Theory Handbook* by Ron Bertrand (VK2DQ).

Long-term goal: understand Maxwell’s equations at a real level.

After Bertrand + calculus review → *Introduction to Electrodynamics* (Griffiths).

Not aiming to be a professional physicist. Aiming for depth.

#### Broad Direction

Avoid ten scattered hobbies under “radio.”

Operate more. Study fundamentals. Build infrastructure. Grow deliberately.

HF in the future:
- 40 m likely
- ~60 ft height if possible
- Possibly inverted-V
- Europe as a target

No random wires. No blind installs. I want to understand what I build.

Continue small station-adjacent systems.

Underlying driver: physics.

This will take years. That’s fine.

---

### February 2 – First ISS Reception

Afternoon pass at ~80° elevation. Heard Iowa, Ohio, Connecticut. Extremely cool.

---

### February 24, 2026 — Winter Storm Reception Test

~24 inches of snow. Signals unusually clean.

Received:
- Whitman – WA1NPO
- West Bridgewater
- Bridgewater – W1MV
- Walpole – K1HRV
- Cumberland – NB1RI
- Providence – R1MIX
- Portsmouth – W1SYE

Confirmed reliable RX across southeastern MA into RI during heavy snow.

---

### November 20–30, 2025 — Radio Purchase

Decided on the Anytone AT-D878 (analog + DMR, GPS/APRS, Bluetooth).

HF unavailable as Technician → DMR offered DX without HF infrastructure.

Will open once licensed / Christmas.

---

### December 3–15, 2025 — Licensing & CW

Passed Technician via PARC. Call sign received.

Started Morse via Morse Mania app.

Prepared by studying manual, programming, repeater research.

---

### December 25–27, 2025 — Northern NJ: First Reception & Net

Stock antenna weak. Switched to digital mode correctly. Lowered squelch.

¼-wave Signal Stick improved RX.

First repeater heard: 442.9 MHz Alpine (~10–15 miles).

First net listened to on Christmas night.

---

### December 28–30, 2025 — Jupiter, FL: Early Nets & DMR

Programmed repeaters manually via RepeaterBook.

Listened to Jupiter–Tequesta Ham Club net.

Attempted AllStar net (wrong TX frequency).

Registered DMR ID. First DMR texting attempt failed (configuration issue).

---

### January 1–4, 2026 — Massachusetts: Long-Distance RX & First DMR TX

Received W1BIM (~40 miles).

Loaded MA repeaters via codeplug export.

Accidental first DMR transmission (Marshfield W1ATD). Confirmed via BrandMeister.

Encouraging TX reach indoors.

---

### January 5–8, 2026 — Antenna Upgrade

Bluetooth integration improved usability.

Ordered N9TAX 2 m/70 cm Slim Jim (window mount).

Purchased Raspberry Pi 3B.

Testing W1BOS reach; suspect terrain blockage (Blue Hills).

---

### January 13, 2026 — First QSO

Organized zones/channels/scan lists.

Fixed DMR ID suffix issue (“01”).

First real QSO: North America talkgroup → China.

---

### January 15, 2026 — First FM Transmission

Slim Jim installed.

Participated in W1BIM nightly net.

~40 miles FM TX from HT. Received 59 report.

Major milestone.

---

### January 17, 2026 — NJ Net

W2NJR Alpine (~13 miles) full quieting.

Received 147.375 MHz repeater ~50 miles south.

Slim Jim clearly superior to Signal Stick indoors.

---

### January 22, 2026 — Boston

Fixed incorrect talkgroup on Prudential repeater.

Attempted APRS TX; no APRS.fi listing yet.

---

### January 23–25, 2026 — Southern New England

Major codeplug revision:
1. Distance-based RepeaterBook search (added RI)
2. Added BrandMeister TGs (USA, TAC310, Casual, Europe, Australia)
3. Troubleshot local DMR repeaters (talkgroup programming + squelch)

Indoor 2 m RX 15–30 miles consistent.

Skywarn activity helpful for testing coverage.

#### Reception Log Highlights (Jan 23)

- AE1C – ~20 mi – DMR Skywarn – S5  
- N1ZHG – ~28 mi – FM – S4  
- KB1RI – ~14 mi – FM – S3–S4  
- NB1RI – ~18 mi – FM – S6  
- K1KWP – ~12 mi – FM – S3  
- K1BIM – ~40 mi – FM – S5–S9  
- W1MV – ~22 mi – FM – S4  

---

### January 28–30 — Minuteman Repeater Association

Received Heavy Hitters via K1KWP.

Attempted signal check. Repeater repeated transmission (confirmation of TX reach).

Access to MMRA system via Mendon repeater confirmed.

---

### January 31 – February 1 — Things Clicking Into Place

Major breakthrough: Digital Monitor on AT878.

Understanding:
- Monitor both time slots
- Listen before changing hotspot talkgroups
- Distinction between NEDECN (DMR-MARC) and BrandMeister

Developed real monitoring strategy (DMR + analog pairing).

Completed QSO on TG93 (USA).

Operational confidence increasing.
