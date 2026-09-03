// Elizabeth Doyle — hearing prep, 20 questions, one every second day.
// Day 1 = 7 September 2026. Day 25 = 25 October 2026.
// From 26 October she stops answering and works as Kieran's practice partner.
// Liz is REPRESENTED by Brendan Donlon BL. Nothing here drills her on advocacy.

const START_DATE = "2026-09-07";
const STEP_DAYS = 2;
const HEARING_NOTE = "Hearing 28 October 2026 before Dunne J";
const PAUL_EMAIL = "paulcoyle1903@gmail.com";

const WEEKS = {
  1: "What this case is about",
  2: "What Brendan argues for you",
  3: "The facts only you can speak to",
  4: "Working alongside Kieran",
  5: "In the room"
};

const QUESTIONS = [
  { d: 1, week: 1,
    q: "Who is suing you, for what, and over which property? Name both plaintiffs in full and give the folio number.",
    focus: "You will hear these names all day on 28 October. Know them cold.",
    covers: [
      "Tanager Designated Activity Company, now in liquidation",
      "Pepper Finance Corporation (Ireland) Designated Activity Company",
      "They seek possession of 82 Beechfield Road, Walkinstown, Dublin 12",
      "Folio DN3781F, County Dublin"
    ]},
  { d: 2, week: 1,
    q: "Tell the story of who has owned this loan, from 2009 to 2022, in plain English. No citations, no jargon.",
    focus: "If you can tell it at the kitchen table you can follow it in court.",
    covers: [
      "Bank of Scotland Ireland lent the money and registered a charge in 2009",
      "That bank was dissolved at the end of 2010 and absorbed into Bank of Scotland",
      "Tanager bought in 2013 and 2014, then straight away assigned the debt on to Deutsche Trustee",
      "Tanager sued in 2015 anyway",
      "In 2020 and 2021 it was sold again, to Balbec, since renamed Lagado",
      "Pepper was brought in as a co-plaintiff in 2022"
    ]},
  { d: 3, week: 1,
    q: "What is a de novo hearing? What does it mean for what happens on 28 October?",
    focus: "This is the single most important thing to understand about the day.",
    covers: [
      "The High Court hears the whole case afresh, not a review of what Judge Linnane decided",
      "Evidence can be given again and arguments made again",
      "So nothing counts as raised too late in the way it would on an ordinary appeal",
      "It is also the final appeal, save on a point of exceptional public importance"
    ]},
  { d: 4, week: 1,
    q: "Who will be in the room and what is each person's job? Include yourself.",
    focus: "Knowing where everyone sits and what they are there for takes a lot of the fear out of it.",
    covers: [
      "Mr Justice Dunne, hearing the appeal",
      "Brendan Donlon BL, your counsel, speaking for you and only you",
      "Kieran, appearing for himself",
      "Counsel and solicitors for Tanager and Pepper, OSM Partners LLP on record for Pepper",
      "Paul, as McKenzie friend, assisting but not addressing the court",
      "You, as an appellant, present and instructing Brendan"
    ]},
  { d: 5, week: 1,
    q: "Kieran is running three arguments. Name them in one line each, in the order he will take them.",
    focus: "You need this so you can tell where he is at any moment.",
    covers: [
      "Standing, that Pepper has no entitlement to seek possession",
      "Adjournment, that the case should wait for the plenary proceedings",
      "Unfair terms in the mortgage conditions"
    ]},
  { d: 6, week: 1,
    q: "Why does Kieran take the standing point first rather than last?",
    focus: "Think about what the court is being asked to do with each argument.",
    covers: [
      "It is a threshold question about whether the court can grant the relief at all",
      "If it succeeds nothing else needs to be decided",
      "It is described as jurisdictional, meaning it cannot be waived by having gone along with things before",
      "Asking it first tells the judge where the case is going"
    ]},

  { d: 7, week: 2,
    q: "Brendan's first point for you concerns a company called Wolfhound Funding. What is he saying about it, in plain terms?",
    focus: "You do not have to argue this. You have to recognise it when he says it.",
    covers: [
      "That the original bank transferred this loan to Wolfhound back in 2008 or 2009",
      "That this happened before the sale to Tanager",
      "So the bank may not have had the loan to sell when it sold to Tanager",
      "The evidence is the plaintiffs' own Companies Office filings"
    ]},
  { d: 8, week: 2,
    q: "Brendan says the Purchase Deed is not before the court, and separately that repurchase provisions make the transfer conditional. What do those two points mean?",
    focus: "Two separate complaints. Keep them apart.",
    covers: [
      "The court has never been shown the actual deed the plaintiffs rely on",
      "A party asking for possession has to prove its title with the document, not a description of it",
      "Separately, if the seller can buy the loan back, the transfer is arguably not absolute",
      "An assignment that is not absolute does not let the buyer sue in its own name alone"
    ]},
  { d: 9, week: 2,
    q: "Brendan challenges the arrears figures and there is a conceded error of €23,973. What is the point being made?",
    focus: "This is the part of his case closest to your own knowledge.",
    covers: [
      "The sum claimed has been shown to be wrong by their own admission",
      "If one figure is wrong the rest are not reliable either",
      "The figures come from records produced by a servicer rather than from the original lender",
      "There is a hearsay objection to evidence given by someone with no first hand knowledge"
    ]},
  { d: 10, week: 2,
    q: "Which arguments belong to Brendan and must not be repeated by Kieran? Name them. Then say what you will do if Kieran starts drifting into them.",
    focus: "This is one of the two most useful things you can do on the day.",
    covers: [
      "Wolfhound and the 2008 or 2009 transfer, the 2014 assignment to Deutsche Trustee, the Purchase Deed point, repurchase conditionality, the arrears and hearsay challenge",
      "Kieran adopts Brendan's submissions in one sentence and moves on",
      "If he drifts, write a short note and pass it, do not speak",
      "Repeating counsel wastes the court's patience and blurs whose case is whose"
    ]},

  { d: 11, week: 3,
    q: "Set out what was paid, to whom, and over what period. Then say what you were told at the time about who you were paying.",
    focus: "Dates and facts only. Nothing you are not sure of.",
    covers: [
      "Payments were made to Pepper as servicer",
      "They were made because Pepper told you that was who to pay",
      "Say what you actually remember; do not fill gaps",
      "Paying whoever tells you to pay is not an agreement that they own the loan"
    ]},
  { d: 12, week: 3,
    q: "List the correspondence and deliveries you handled personally, with dates and addresses.",
    focus: "You attended Harcourt Street yourself. That is your evidence, not Kieran's.",
    covers: [
      "17 June 2026, Byrne Wallace Shields at 88 Harcourt Street, documents handed to the receptionist at 2.05pm",
      "No answer at OSM Partners at 87 Harcourt Street the same day",
      "You swore an affidavit of service",
      "Be able to give the time and what you handed over without notes"
    ]},
  { d: 13, week: 3,
    q: "What arrears figure is claimed against you, and what do you say is wrong with it?",
    focus: "The figures are in the Pepper letter of 30 March 2021.",
    covers: [
      "Closing balance €474,290.54 and arrears €219,389.61 as stated in that letter",
      "An error of €23,973 has been conceded by the other side",
      "The interest applied to arrears is itself challenged as an unfair term",
      "You are not expected to do the arithmetic in the witness box"
    ]},
  { d: 14, week: 3,
    q: "If you are asked questions on oath about the figures or the payments, what may you say and what must you not do?",
    focus: "The honest answer is often the strongest one.",
    covers: [
      "Answer only what you actually know",
      "I do not know and I do not recall are proper answers",
      "Do not estimate, guess or agree with a figure put to you that you have not checked",
      "Ask for a document to be shown to you if a question depends on it",
      "Answer the question asked and then stop"
    ]},

  { d: 15, week: 4,
    q: "The illness and the solicitor history are part of why these points were not raised years ago. Write two sentences on it. Then say who should be the one to mention it in court, and why.",
    focus: "Two sentences. Not three.",
    covers: [
      "State it factually and briefly, without adjectives",
      "It explains the delay; it is not the case itself",
      "Brendan is better placed to raise anything touching on your own position",
      "It should be said once by one person, not twice by two"
    ]},
  { d: 16, week: 4,
    q: "You have watched Kieran practise for six weeks now. Name the two things he loses under pressure.",
    focus: "Be specific. Two things, not a general impression.",
    covers: [
      "Name the actual two, from watching him, not what you would guess",
      "Say how you would prompt him on each, in a few words on paper",
      "Tell him now, not on the day",
      "This is the most useful thing in this whole set of questions"
    ]},
  { d: 17, week: 4,
    q: "Go through the bundle. What is in it, and where does each of these sit: the loan offer, the February 2008 terms and conditions, the Form C1, the Global Deed, the Central Bank letters?",
    focus: "Do this with the actual papers in front of you, not from memory.",
    covers: [
      "Know the order the documents are in",
      "Be able to find any one of the five in under thirty seconds",
      "Tab or mark them if they are not already marked",
      "On the day you are the one who finds the page while Kieran keeps talking"
    ]},
  { d: 18, week: 4,
    q: "What is worth writing on a note to pass to Kieran during the hearing, and what is not?",
    focus: "A bad note is worse than no note. It stops him mid sentence.",
    covers: [
      "Worth it: a document reference, a date he has got wrong, a point he has skipped, that is Brendan's",
      "Not worth it: commentary, encouragement, anything he cannot act on in one line",
      "Keep it to a few words",
      "Pass it when he pauses, not while he is speaking"
    ]},
  { d: 19, week: 4,
    q: "If Kieran freezes or loses his place, what do you do? Say it as a sequence.",
    focus: "Decide this now so neither of you has to think about it on the day.",
    covers: [
      "Do not speak or stand",
      "Find the place in his notes and put a finger on it",
      "He is entitled to ask the court for a moment; he should ask rather than rush",
      "If it is genuinely stuck, Brendan or Paul is better placed to intervene than you"
    ]},
  { d: 20, week: 4,
    q: "Last one. What do you each carry on 28 October, what time do you leave, and what is the one thing you will remind him of before you go in?",
    focus: "Practical only. Write it down and put it somewhere you will find it.",
    covers: [
      "Who carries which bundle, so nothing is left in the car",
      "Leave time that assumes traffic and finding the courtroom",
      "Phones off, not silent",
      "The one reminder should be about how he speaks, not what he says",
      "From here on you are his practice partner rather than answering questions"
    ]},

  { d: 21, week: 5,
    q: "You cannot speak in court. So how will you tell when Dunne J has stopped listening and Kieran needs to move on? Name the signs.",
    focus: "Watch a judge on a court list beforehand if you can. This is a skill, not a guess.",
    covers: [
      "He stops writing, or puts the pen down",
      "He looks away, turns pages ahead, or checks the clock",
      "He says I have that point, or I understand, or yes yes",
      "Interrupting with a question is engagement; going quiet is often not",
      "Agree a signal with Kieran now for move on, and keep it small"
    ]},
  { d: 22, week: 5,
    q: "Write down every question the judge asks and who he asks it of. Why is that note worth more than anything else you will do that day?",
    focus: "Practise it on any court list. It is harder than it sounds and you cannot ask him to repeat.",
    covers: [
      "There is no transcript unless one is ordered, so your note may be the only record",
      "If a certificate on a point of exceptional public importance is sought, what was asked and answered matters",
      "Write the question, not your reaction to it",
      "Note the time beside each one",
      "Keep it separate from the notes you pass to Kieran"
    ]},
  { d: 23, week: 5,
    q: "List everything you must not do in that courtroom. Be specific.",
    focus: "This is the shortest question here and the most important. Getting it wrong costs Kieran his support mid hearing.",
    covers: [
      "Do not speak, at all, unless the judge addresses you directly",
      "Do not prompt Kieran audibly, even in a whisper",
      "Do not react visibly to anything said by the other side or the judge",
      "Do not approach the bench or hand anything up yourself",
      "Audible prompting is the fastest way to have Paul's permission to assist withdrawn"
    ]},
  { d: 24, week: 5,
    q: "If the order is made against you both, what do you each do in the ten minutes afterwards? Decide it now.",
    focus: "Last question. Answer it while it is still hypothetical.",
    covers: [
      "Kieran asks for a stay, time in the property, and costs reserved. It is on the back page of his notes",
      "You write down exactly what the judge orders, including any dates",
      "Nobody speaks to the other side and nobody says anything in the hall",
      "Brendan will need instructions; give them outside, not in the room",
      "Leave the building before discussing anything"
    ]},

  { d: 25, week: 5,
    q: "Pepper's counsel will hand up the folio and say the register is conclusive, Pepper owns the charge, and you cannot go behind it. What are they saying, what is Kieran's answer in one line, and why is it not your job to make it?",
    focus: "You are not learning to argue this. You are learning to recognise it so you know whether to worry.",
    covers: [
      "They are saying the Land Registry folio settles who owns the charge, and it largely does",
      "Kieran does not fight that. He accepts Pepper is registered",
      "His answer in one line: the register proves who is registered, it proves nothing about who owns the debt",
      "The debt and the charge are two different things and they travelled separately here",
      "So when you hear it, it is expected, not a disaster. Kieran has an answer and he has practised it",
      "It is not your job because Brendan speaks for you and Kieran speaks for himself. You watch, note and pass paper"
    ]}
];
