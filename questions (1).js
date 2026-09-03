// Kieran Doyle hearing prep — 42 day question bank.
// Day 1 = 1 September 2026. Day 57 = 27 October 2026. Hearing 28 October.
// Edit freely: q = the question, focus = the nudge shown before answering,
// covers = the points a strong answer hits, shown only after he submits.

const START_DATE = "2026-09-01";
const HEARING_NOTE = "Hearing 28 October 2026 before Dunne J";
const PAUL_EMAIL = "paulcoyle1903@gmail.com";

const WEEKS = {
  1: "Who owns this loan",
  2: "The standing objection",
  3: "Illegality, and the answer to Cave",
  4: "The adjournment application",
  5: "Unfair terms",
  6: "Standing up and saying it",
  7: "What they will throw at you"
};

const QUESTIONS = [
  // ---------- WEEK 1 ----------
  { d: 1, week: 1,
    q: "Explain the core holding of Fannon v Ulster Bank Ireland Ltd [2024] IECA 51. What does registration of a charge on the folio NOT prove, and what must an assignee prove separately?",
    focus: "Registration proves the charge exists. It does not prove the debt was absolutely assigned.",
    covers: [
      "Registration as owner of the charge is proof of the charge, not proof of ownership of the underlying debt",
      "The debt and the security are separate; they can and here did travel separately",
      "An assignee suing on the debt must prove the assignment itself, by producing the instrument",
      "Applied to us: Tanager was on the folio, that alone never proved Tanager could sue"
    ]},
  { d: 2, week: 1,
    q: "O'Rourke v Considine [2011] IEHC 191 sets out the conditions for a valid legal assignment under section 28(6) of the Supreme Court of Judicature Act (Ireland) 1877. List them, and say what happens to an assignee who fails one.",
    focus: "Four conditions. Finlay Geoghegan J. The consequence of failing is not nothing, it is that you become an equitable assignee.",
    covers: [
      "In writing, signed by the assignor",
      "Absolute, not by way of charge only",
      "Of a debt or other legal chose in action",
      "Express notice in writing given to the debtor",
      "Fail one and the assignee is equitable only, and must join the assignor to sue"
    ]},
  { d: 3, week: 1,
    q: "What is the practical difference, standing in this courtroom, between a legal assignee and an equitable assignee?",
    focus: "This is the whole point of the section 28(6) analysis. Do not get lost in the theory.",
    covers: [
      "A legal assignee sues in its own name alone",
      "An equitable assignee cannot; the assignor must be joined so the debtor is not exposed twice",
      "So if Pepper is at best equitable, Tanager or Deutsche Trustee had to be before the court",
      "The court cannot make a possession order in favour of a party that cannot sue alone"
    ]},
  { d: 4, week: 1,
    q: "Name every entity in this chain and say in one line what each one is or claims to be: BOSI, Bank of Scotland plc, Tanager, Deutsche Trustee Company Limited, Balbec Loan IE IV, Lagado Assets IE IV, Pepper.",
    focus: "You will be asked this by the judge in some form. Know it without hesitating.",
    covers: [
      "BOSI: original lender, dissolved 31 December 2010",
      "Bank of Scotland plc: took BOSI by cross-border merger, never registered as charge owner",
      "Tanager DAC: bought in 2013/2014, now in liquidation",
      "Deutsche Trustee: Security Trustee, took an absolute assignment of the debt in April 2014",
      "Balbec Loan IE IV, since renamed Lagado Assets IE IV: the Buyer, holds the beneficial interest",
      "Pepper: nominated by the Buyer to hold legal title only, and acts as servicer"
    ]},
  { d: 5, week: 1,
    q: "Put the chain in date order from 2009 to 2022, with the year for each step. Then say which single date does the most damage to the plaintiffs.",
    focus: "The damaging date is the one that comes before the Civil Bill.",
    covers: [
      "2009 charge registered; 2010 BOSI dissolved; 2013 Purchase Deed; April 2014 Deed of Assignment and Deed of Charge; October 2014 supplemental; July 2015 Civil Bill; 2020 possession order; 2021 transfer; 2022 Pepper joined and registered",
      "The damaging date is 14 April 2014, fifteen months before the Civil Bill",
      "Because on that date Tanager assigned the debt and the right to sue absolutely to the Security Trustee",
      "So Tanager issued proceedings on a debt it had already assigned away"
    ]},
  { d: 6, week: 1,
    q: "The Form C1 registered in the CRO in 2014 is a public document filed by Tanager's own solicitors. Why does that matter more than anything you could say yourself?",
    focus: "It is their admission, not your allegation.",
    covers: [
      "It is a public filing made by the plaintiff side, not evidence you have manufactured",
      "It records an absolute assignment of the facilities and the right to demand, sue for and recover",
      "Registered land charges were only charged, not assigned, which is why Tanager kept the folio",
      "That split is the answer to any argument that registration solves their problem"
    ]},
  { d: 7, week: 1,
    q: "In ninety seconds, out loud, explain to somebody who knows nothing about this case why the person suing you may not be entitled to. Time yourself.",
    focus: "If you cannot do it in ninety seconds you do not have it yet. Say it aloud, not in your head.",
    covers: [
      "Plain language, no citations, no jargon",
      "The bank sold the loan several times over",
      "One of those sales gave the right to sue to somebody who is not in court",
      "The company in court now was not even a party when the order was made"
    ]},

  // ---------- WEEK 2 ----------
  { d: 8, week: 2,
    q: "What is locus standi, and why is it described as jurisdictional rather than procedural? Cite the authority.",
    focus: "Cahill v Sutton [1980] IR 269, Henchy J. The word jurisdictional is doing the work.",
    covers: [
      "Standing is the right of this particular party to seek this particular relief",
      "It goes to the court's power to grant the relief at all, not merely to how the case was run",
      "Because it is jurisdictional it cannot be conferred by consent or lost by inaction",
      "Cahill v Sutton [1980] IR 269"
    ]},
  { d: 9, week: 2,
    q: "The other side will say you should have raised this years ago. What is your authority for saying a jurisdictional point can be raised now?",
    focus: "Goold v Collins [2004] IESC 38, Murray J. Then add the de novo point on top.",
    covers: [
      "Goold v Collins [2004] IESC 38: jurisdiction may be raised at any stage, including on appeal",
      "Standing cannot be waived by procedural inaction",
      "And this is a de novo rehearing, so the whole case is heard afresh in any event",
      "Do not sound defensive when answering this; it is a point of law, not an apology"
    ]},
  { d: 10, week: 2,
    q: "Set out the bare facts of Pepper's position on the date the possession order was made, and on the date it was joined. Dates only, no argument.",
    focus: "Three dates. 27 January 2020, 25 March 2021, 7 February 2022. Notice the order they fall in.",
    covers: [
      "27 January 2020: Judge Linnane made the possession order; Pepper was not a party",
      "25 March 2021: the transfer Pepper relies on, over a year after the order",
      "7 February 2022: Pepper joined as co-plaintiff by ex parte order",
      "So Pepper's title postdates the order it now seeks to enforce"
    ]},
  { d: 11, week: 2,
    q: "Explain the CRO number discrepancy in the Global Deed of Transfer. Then say honestly what it does not prove.",
    focus: "Be able to state the weakness before the judge finds it. A point you can defend is worth more than one you cannot.",
    covers: [
      "The Global Deed names Pepper but gives registered number 649497",
      "649497 is IRMT-BW1 DAC, a different company; Pepper is 34927",
      "So either the deed is defective on its face or it transferred to a different entity",
      "What it does not prove: it may be a drafting error, and the name and registered office do match Pepper",
      "The honest way to put it is that the deed is unreliable and the court should require proof, not that fraud is established"
    ]},
  { d: 12, week: 2,
    q: "What is the Negative Pledge, where does it come from, and what do you say it does to the 2021 transfer?",
    focus: "It dates from the April 2014 Deed of Charge, clause 7.2, not just the October supplemental.",
    covers: [
      "Tanager covenanted not to dispose of the charged assets without the Security Trustee's prior written consent",
      "No consent from Deutsche Trustee to the 2021 transfer appears anywhere in the documents produced",
      "So the transfer to Balbec and the nomination of Pepper is challenged as ineffective",
      "Ask the court to require production of the consent rather than asserting there is none"
    ]},
  { d: 13, week: 2,
    q: "Recite the opening words of the standing application from memory. Write them out without looking, then check.",
    focus: "This is the one paragraph you must know by heart. Nothing else needs to be word perfect.",
    covers: [
      "Ask the court to determine standing as a threshold matter before evidence",
      "Name Pepper in full",
      "Say the words: this is a jurisdictional matter",
      "Say: standing cannot be waived by procedural inaction",
      "Say: this court cannot grant possession to a party that has no title",
      "Ask to be heard on standing before evidence is called"
    ]},
  { d: 14, week: 2,
    q: "State the whole standing objection in three sentences. No citations. Then say it aloud twice.",
    focus: "Three sentences. If it takes four you are including something you do not need.",
    covers: [
      "Pepper was not a party when the order was made",
      "Its title comes from a later transfer that is challenged and unproven",
      "A court cannot grant possession to a party that cannot prove it is entitled to seek it"
    ]},

  // ---------- WEEK 3 ----------
  { d: 15, week: 3,
    q: "The two Central Bank letters of 27 and 28 August 2026. What do they actually say, and just as importantly, what do they not say?",
    focus: "Be precise. Overstating these letters in court will cost you the point entirely.",
    covers: [
      "They confirm Balbec, now Lagado, is registered as an SPV",
      "They confirm SPV registration is not authorisation as a credit servicing firm",
      "They confirm Pepper holds legal title and is an authorised credit servicer",
      "What they do NOT say: that Lagado was carrying on credit servicing, or that anyone acted unlawfully",
      "The Central Bank expressly declined to interpret the section on individual cases"
    ]},
  { d: 16, week: 3,
    q: "Cave Projects Ltd v Gilhooley [2025] IESC 3. Who won, and what did the Supreme Court actually decide?",
    focus: "Read this one properly. It does not say what a summary of it might suggest.",
    covers: [
      "Hogan J, Supreme Court, 28 January 2025",
      "The debtor lost; the appeal was dismissed",
      "He tried to raise unauthorised credit servicing illegality for the first time on appeal, after a full plenary trial",
      "Because the conduct was not illegal on its face, he needed persuasive and comprehensive evidence of illegality",
      "He did not meet that threshold, so the court would not act on the unpleaded point"
    ]},
  { d: 17, week: 3,
    q: "In Cave, what evidence of unauthorised credit servicing did the appellant rely on, and how did the court treat it? Why should that worry us?",
    focus: "This is the hardest question in the whole six weeks. Sit with it.",
    covers: [
      "He relied on a Central Bank public notice stating the Bank believed the party was servicing without authorisation",
      "The Supreme Court held that was not sufficient",
      "Our letters say less than that notice did; they do not allege unauthorised activity at all",
      "So we do not lead with illegality, and we never assert a criminal offence has been committed",
      "The Lagado point is context supporting a demand for proof of title, not a freestanding illegality defence"
    ]},
  { d: 18, week: 3,
    q: "Cave and Lough Swilly are both about raising new arguments on appeal. Why do neither of them stop you in this hearing?",
    focus: "The answer is two words, and it is the strongest procedural point you have.",
    covers: [
      "This is a de novo rehearing of a Circuit Court appeal in the High Court",
      "The whole matter is heard afresh on the evidence, so nothing is new on appeal",
      "Cave concerned a point raised in the Supreme Court after a full plenary trial, a wholly different posture",
      "Say this calmly and early, before they open Cave against you"
    ]},
  { d: 19, week: 3,
    q: "Lough Swilly [2013] IESC 16 describes a spectrum. Where on that spectrum does the standing point sit, and why?",
    focus: "O'Donnell J. The word to reach for is supervening.",
    covers: [
      "At one end, points that were available and deliberately not run; at the other, points that could not have been run",
      "Pepper's joinder in 2022 is a supervening fact postdating the January 2020 order",
      "You could not have objected in 2020 to the standing of a party that was not there",
      "So this sits at the permissive end of the spectrum"
    ]},
  { d: 20, week: 3,
    q: "You made payments to Pepper for years. How is that not an acceptance of Pepper's entitlement?",
    focus: "Expect this from the bench, not from counsel. Answer it in under a minute.",
    covers: [
      "Payments were made on Pepper's own representations that it was the servicer",
      "Paying the party who tells you to pay is not a legal admission of their title",
      "Standing is jurisdictional and cannot be conferred by conduct",
      "PTSB v Donohoe [2025] IECA 222: prior dealings do not preclude a standing challenge"
    ]},
  { d: 21, week: 3,
    q: "Write out, word for word, how you will answer the judge if he says: you are raising this very late in the day.",
    focus: "Short, respectful, no grievance in your voice. Then read it back and cut a third of it.",
    covers: [
      "Acknowledge the question directly rather than deflecting",
      "This is a rehearing, so the point arises afresh",
      "The point is jurisdictional and could not have been raised against a party who was not before the Circuit Court",
      "One sentence, not a speech, on the representation and health circumstances",
      "Then return to the substance immediately"
    ]},

  // ---------- WEEK 4 ----------
  { d: 22, week: 4,
    q: "Pepper v Cuffe [2025] IEHC 393, Phelan J, paragraph 65. What is the test for adjourning a possession claim, and what exactly must you show?",
    focus: "The phrase to memorise is reasonably offering a chance.",
    covers: [
      "Parallel High Court proceedings that reasonably offer a chance of a substantive remedy",
      "You do not have to show the plenary will succeed, only that it is real and relevant",
      "It must bear on the entitlement to the relief sought in the possession claim",
      "Confirmed source: courts.ie, 2025_IEHC_393"
    ]},
  { d: 23, week: 4,
    q: "What does the plenary 2026/1350P actually claim, and who are the defendants? Name all five.",
    focus: "You must be able to say what your own case is about without reading from a page.",
    covers: [
      "Tanager, Bank of Scotland plc, Deutsche Trustee Company Limited, Tailte Éireann, the Attorney General",
      "It challenges the validity of the chain of title and the 2021 transfer",
      "It puts the absolute assignment to the Security Trustee squarely in issue",
      "Issued 13 March 2026"
    ]},
  { d: 24, week: 4,
    q: "Why does the plenary reasonably offer a chance of a substantive remedy? Make the link explicit between the plenary and this possession claim.",
    focus: "A judge will not make the connection for you. Spell it out.",
    covers: [
      "If the 2021 transfer is invalid, Pepper has no title to enforce",
      "If the debt was absolutely assigned in 2014, the wrong party sued in 2015",
      "Either finding would remove the basis for the possession order",
      "So the two sets of proceedings cannot sensibly be determined in the wrong order"
    ]},
  { d: 25, week: 4,
    q: "The plenary is listed for mention on 12 October, the day before this hearing is expected. What do you want to have happened on 12 October, and what will you say on 13 October about it?",
    focus: "Plan for the good outcome and the bad one.",
    covers: [
      "Ideally an updated position or directions showing the plenary is live and progressing",
      "Bring the courts.ie search or the order from 12 October to the appeal hearing",
      "Be able to state accurately what happened, with no embellishment",
      "Never overstate the status of the plenary to the court"
    ]},
  { d: 26, week: 4,
    q: "If the plenary is struck out or dismissed on 12 October, what do you say on 13 October? Draft the fallback.",
    focus: "Do not skip this one because it is uncomfortable. This is the day it saves you.",
    covers: [
      "Say plainly what happened; do not hide it",
      "An intention to appeal, if that is the position, is stated accurately and not overstated",
      "The standing objection survives independently of the plenary, because it is jurisdictional",
      "The unfair terms argument also survives independently",
      "So the adjournment falls away but the case does not"
    ]},
  { d: 27, week: 4,
    q: "In what order do you ask for your three things, and why that order?",
    focus: "Threshold first. Think about what each one asks the court to do.",
    covers: [
      "Standing first, because it is a threshold jurisdictional matter and disposes of everything",
      "Adjournment second, as the primary relief if standing is not determined in your favour",
      "Unfair terms third, on the substance if the court proceeds",
      "Say the order out loud at the start so the judge knows where you are going"
    ]},
  { d: 28, week: 4,
    q: "Deliver the adjournment application out loud, start to finish, in under three minutes. Then write down what you left out.",
    focus: "Time it. Three minutes.",
    covers: [
      "Identify the parallel proceedings by record number",
      "State the Cuffe test in the court's own words",
      "Make the link to the relief sought here",
      "Say what prejudice, if any, an adjournment causes and why it is outweighed",
      "Sit down when finished rather than filling silence"
    ]},

  // ---------- WEEK 5 ----------
  { d: 29, week: 5,
    q: "Name the four clauses of the BOSI February 2008 Terms and Conditions you say are unfair, and what each one does. Clause numbers.",
    focus: "3.3, 5.2(d), 7.4, 8.1. Know which is which without looking.",
    covers: [
      "3.3: interest rate variation, no objective criteria",
      "5.2(d): interest on arrears at the full mortgage rate",
      "7.4: conclusive evidence certificate",
      "8.1: assignment, including that a transferee may vary the rate"
    ]},
  { d: 30, week: 5,
    q: "Explain the asterisk problem on the loan offer, and why it matters under Article 4(2) of Directive 93/13/EEC.",
    focus: "Kásler C-26/13 and Andriciuc C-186/16. The issue is plain and intelligible language.",
    covers: [
      "The loan offer showed APR with an asterisk pointing to a definition of the ECB rate",
      "The Terms and Conditions never mention the ECB rate at all",
      "The actual rate was BOSI's own variable rate set at its discretion",
      "A core term escapes assessment only if it is in plain intelligible language; this was not",
      "So clause 3.3 is open to an unfairness assessment"
    ]},
  { d: 31, week: 5,
    q: "Clause 5.2(d) charges interest on arrears at the full mortgage rate. What is wrong with that, and what did Stack J say about it?",
    focus: "C-744/24 and Banco Primus C-421/14. Stack J raised this herself.",
    covers: [
      "Banco Primus: default interest imposing a disproportionate burden is presumptively unfair",
      "C-744/24: interest properly runs on principal advanced, not on costs and arrears in the same way",
      "Stack J indicated charging extra specifically because a borrower is in arrears may be unlawful",
      "The point was introduced by the other side's counsel, which answers any objection to you raising it"
    ]},
  { d: 32, week: 5,
    q: "What is a conclusive evidence clause, and why is clause 7.4 objectionable?",
    focus: "Calderón Camino C-618/10.",
    covers: [
      "It makes the lender's own certificate final and conclusive as to what is owed",
      "It shifts the burden onto the consumer and restricts the evidence available to them",
      "Prima facie unfair, and the court must consider it of its own motion",
      "Ties to the arrears figures being unverified, including the conceded error"
    ]},
  { d: 33, week: 5,
    q: "Clause 8.1 lets the loan be transferred and lets the transferee vary the rate. Why is that a consumer law problem and not just a commercial term?",
    focus: "GR REAL C-351/23, Grand Chamber. Also note Brendan's view that this argument has been run and lost before.",
    covers: [
      "The consumer consented in advance to an unknown future party varying the rate at its discretion",
      "GR REAL confirms the Directive applies to distressed mortgages and to post-transfer enforcement",
      "So the transferee cannot rely on the clause to escape the fairness assessment",
      "Be aware this is the weakest of the four; do not spend your best minutes on it"
    ]},
  { d: 34, week: 5,
    q: "What is the court's own-motion obligation, and what are your Irish authorities for it?",
    focus: "Cannon para 122, Coleman, Counihan, Kenehan. The Irish authority matters more than the CJEU here.",
    covers: [
      "The court must assess unfair terms of its own motion, even if the consumer does not argue it",
      "Cannon [2020] IESC 2 at paragraph 122, O'Malley J: it is a matter of public policy",
      "Coleman [2025] IEHC 747, Stack J: the duty applies at the enforcement stage even after judgment",
      "Counihan [2016] IEHC 752 and Kenehan [2017] IEHC 604, Barrett J",
      "Kenehan: possession refused where the contractual documents were not before the court"
    ]},
  { d: 35, week: 5,
    q: "Why do unfair terms matter to a possession order at all? Answer the judge who says this is a debt point, not a possession point.",
    focus: "Connect the term to the sum, and the sum to the demand, and the demand to the order.",
    covers: [
      "Possession follows from a valid demand for a sum properly due",
      "If the rate and arrears were set under unfair terms, the sum demanded is not established",
      "Kenehan: possession refused where the lender did not put the contractual documents before the court",
      "O'Reilly [2026] IEHC 16, Simons J: possession remitted on unfair terms and consumer law grounds"
    ]},

  // ---------- WEEK 6 ----------
  { d: 36, week: 6,
    q: "Cannon is a Supreme Court case where the borrowers lost on the rate variation clause. How do you distinguish it?",
    focus: "Know the weakness in your own best authority before they point it out.",
    covers: [
      "In Cannon the rate moved in the borrowers' favour on those facts",
      "Here the rate moved adversely and clause 3.3 contains no objective criteria at all",
      "Cannon predates Kásler, Andriciuc, GR REAL and C-744/24 in their application here",
      "Cannon is still your authority for the own-motion obligation at paragraph 122"
    ]},
  { d: 37, week: 6,
    q: "O'Reilly [2026] IEHC 16, Simons J. What was the threshold met, and why is it the most useful recent case for you?",
    focus: "It is a 2026 example of exactly the outcome you are asking for.",
    covers: [
      "Possession was remitted to plenary on credible consumer law grounds",
      "Unfair terms grounds met the remittal threshold",
      "It shows a court taking these arguments seriously rather than treating them as delay",
      "Use it to answer the suggestion that your points are unstateable"
    ]},
  { d: 38, week: 6,
    q: "List everything Brendan Donlon BL covers for Elizabeth. What are you not going to say, no matter how much you want to?",
    focus: "Repeating him wastes your credit with the judge and annoys the court. Read the list twice.",
    covers: [
      "Wolfhound Funding 2008-1, the C1 and the 2008/2009 transfer",
      "The April 2014 absolute assignment to Deutsche Trustee and Woodruffe",
      "The Purchase Deed not being before the court",
      "Repurchase provisions and conditionality under section 28(6)",
      "Default, arrears and the conceded error, with Burns on hearsay",
      "He opens first. You speak after. You adopt his submissions in one sentence and move on"
    ]},
  { d: 39, week: 6,
    q: "Draft two sentences, no more, on the representation failures and the health circumstances. Two sentences only.",
    focus: "This is important context and it is also the fastest way to lose a judge if it runs long.",
    covers: [
      "State it once, factually, without adjectives",
      "The solicitor was gravely ill on the day of the Circuit Court hearing and later died",
      "A later solicitor is the subject of a Law Society strike-off application",
      "Then say: I mention that only to explain why these points were not raised earlier",
      "Then stop and return to the law"
    ]},
  { d: 40, week: 6,
    q: "Answer these three out loud, cold, one minute each. Why now? You paid them for years, didn't you? Isn't this just delay?",
    focus: "No notes. Record yourself if you can and listen back once.",
    covers: [
      "Why now: de novo rehearing, jurisdictional point, supervening joinder",
      "Payments: made on the servicer's own representations, Donohoe",
      "Delay: three defined arguments, all raised in advance in served submissions, plus live plenary proceedings",
      "Tone matters more than content on all three; slow down and do not sound aggrieved"
    ]},
  { d: 41, week: 6,
    q: "Full run-through. Standing, then adjournment, then unfair terms, out loud, start to finish. Note where you hesitated.",
    focus: "One pass. Do not stop to fix things mid-way; note them and keep going.",
    covers: [
      "Opening words verbatim",
      "Standing in three sentences, then the authorities",
      "Adjournment on Cuffe with the link to the plenary spelled out",
      "Four clauses named with clause numbers, then the own-motion duty",
      "Where you hesitated is tomorrow's work"
    ]},
  { d: 42, week: 6,
    q: "Tomorrow. What is in the bag, what are the first words out of your mouth, and what do you do if you lose your place?",
    focus: "Last one. Keep it practical.",
    covers: [
      "Books of authorities, submissions, the loan offer and February 2008 T&Cs, the Form C1, the Global Deed, the Central Bank letters, the 12 October position",
      "First words: the standing application, verbatim",
      "If you lose your place: stop, say you will come back to it, move to the next point",
      "You are entitled to ask the court for a moment. Ask for it rather than rushing",
      "Paul is beside you. Look over if you need to"
    ]},

  // ---------- WEEK 7. DRILLS. Out loud, sixty seconds, nothing in front of you. ----------
  { d: 43, week: 7, drill: true,
    q: "Pepper's counsel hands up the folio and says: Pepper is the registered owner of the charge, the register is conclusive under section 31, and Tanager v Kane says you cannot go behind it. Answer that.",
    focus: "This is the first thing they will say and it is their best point. If you have no answer to this you have no case.",
    covers: [
      "Do not dispute that Pepper is registered. Kane closes that off and fighting it wastes your credit",
      "Fannon v Ulster Bank [2024] IECA 51 at para 99: section 31 makes the register conclusive of the title of the owner and of burdens appearing on it, but it is NOT evidence, still less conclusive evidence, of the TERMS of the transfer or assignment under which that owner became entitled",
      "So section 31 does not cure the evidential deficit, because it does not make the register conclusive of whether the assignment was absolute",
      "Cody [2021] IESC 26 at para 49: two facts must be proved. Para 50: the register is conclusive of the first one only",
      "Say it in one line: the register proves who is registered. It proves nothing about the debt"
    ]},
  { d: 44, week: 7, drill: true,
    q: "Tanager v Kane is the same 14 April 2014 deed from Bank of Scotland to Tanager that appears in your own chain. Kane ran a challenge to it and lost. Say what he ran, why it failed, and why it is not your argument.",
    focus: "Face this before they corner you with it. Knowing why Kane lost is what shows you are not making his mistake.",
    covers: [
      "Kane argued that because BOS never registered, it could not transfer the charge. That failed",
      "Baker J held at para 131 that the deed is effective by statute under section 90 of the 1964 Act. Never run that argument",
      "Kane is about the charge on registered land and sections 62, 64 and 90. It says nothing about the debt as a chose in action or about section 28(6)",
      "Kane para 35: registration is not, and was never intended to be, evidence of beneficial ownership",
      "Kane para 85: the true beneficial interest can be determined only in equity proceedings, not in possession proceedings",
      "Watch para 62. Baker J held Kane had no standing to challenge the register as a third party to that transfer. You are a borrower and a party, which is how Fennell v Corcoran at para 41 distinguishes it"
    ]},
  { d: 45, week: 7, drill: true,
    q: "Registration alone does not get them possession. What is the second fact they must prove, and what does your own PRA letter of 28 November 2022 show?",
    focus: "This is where the case is still winnable even if the register point goes against you.",
    covers: [
      "Cody [2021] IESC 26, Baker J, para 49: the section 62(7) owner must prove two facts, that it is the owner of the charge, and that the right to seek possession has arisen and is exercisable on the facts",
      "Para 50: the folio proves the first. It does not touch the second",
      "The PRA letter of 28 November 2022 says Pepper was registered on a Form 56 under section 64, and that Entry 10 is a note of the change of ownership of the charge at Entry 8",
      "Section 64 and a Form 56 transfer the registered charge. The PRA says nothing about the debt",
      "That is the registry itself drawing the distinction for you, in your own document",
      "The unfair terms argument and the conceded arrears error live in the second fact, not the first"
    ]},
  { d: 46, week: 7, drill: true,
    q: "From the bench: are you disputing the debt, or only disputing who owns it?",
    focus: "A trap. Answer both halves or you concede one of them.",
    covers: [
      "Both, and say so plainly",
      "The sum claimed is disputed, including a conceded error of €23,973",
      "The rate and the arrears interest were set under terms said to be unfair",
      "And separately the party seeking the order has not proved its entitlement",
      "Do not let the question narrow your case to one ground"
    ]},
  { d: 47, week: 7, drill: true,
    q: "From the bench: what is your proposal in relation to payment?",
    focus: "Have an actual answer. Silence here does more damage than a modest figure.",
    covers: [
      "Answer it rather than deflecting into law",
      "Say what is realistically affordable, or say that a proposal has been made and what happened to it",
      "If there is no proposal, say why, briefly and without excuses",
      "Then return to the point that the sum itself is disputed"
    ]},
  { d: 48, week: 7, drill: true,
    q: "From the bench: what prejudice do you suffer if I make the order now and you later succeed in the plenary?",
    focus: "This is the question the adjournment application lives or dies on.",
    covers: [
      "Possession of a family home is not readily undone once executed",
      "A sale to a third party would put the property beyond recovery",
      "The plenary would become academic in practical terms even if it succeeded",
      "By contrast the delay to the plaintiffs is measured in months and is compensable"
    ]},
  { d: 49, week: 7, drill: true,
    q: "Dunne J says: I am minded to make the order but stay it pending the outcome of the plenary. Do you accept that? Decide now, before the day.",
    focus: "This is the most likely outcome of all. Do not be deciding it standing up.",
    covers: [
      "Know your answer in advance and know Elizabeth's and Brendan's position too",
      "A stay preserves the position and keeps you in the house",
      "But an order made is an order made, and the plenary then runs against a possession order",
      "If you would accept a stay, know what conditions you can live with",
      "Whatever you decide, do not answer this one off the cuff"
    ]},
  { d: 50, week: 7, drill: true,
    q: "Their counsel opens Cave Projects v Gilhooley against you and says a Central Bank letter is not evidence of illegality. Answer in sixty seconds.",
    focus: "You know this case better than they expect you to. Use that calmly.",
    covers: [
      "Agree with them, and say the illegality point is not being run as a freestanding defence",
      "Cave was a point raised for the first time in the Supreme Court after a full plenary trial",
      "This is a rehearing, so nothing is new",
      "Cave turned on retrospectivity; these transfers are December 2020 and March 2021, after the 2018 Act",
      "The Lagado material supports a demand for proof of title, nothing more"
    ]},
  { d: 51, week: 7, drill: true,
    q: "From the bench: your plenary only issued in March 2026, six years after the order. Why should I hold up a rehearing for it? Answer, and use Kane to do it.",
    focus: "Kane is not only their case. Paragraph 87 is yours. Dunne J has been firm about not adjourning, so this has to be tight.",
    covers: [
      "Kane para 87: the possession court has inherent jurisdiction to adjourn or stay pending determination of separate proceedings reasonably likely to offer a defence",
      "Kane paras 61, 69, 76 and 85: rectification and beneficial ownership can be determined only in inter partes equity proceedings, never in summary possession. So the plenary is the only competent jurisdiction for these complaints",
      "Cody paras 95 to 101: the power to adjourn is discretionary, subject to no constraint of time or sequence, exercisable by the judge of his own motion. Para 101 calls adjournment to plenary perhaps the default position where a defence deserves to be fully tested",
      "Cuffe [2025] IEHC 393 para 65 on top: parallel proceedings reasonably offering a chance of a substantive remedy",
      "Ask for a short adjournment to a fixed date, never an open one. The plenary is already before Stack J on 12 October",
      "Expect Donohoe [2025] IECA 222 para 60 in reply, that adjournment is only for issues where a credible defence is shown. Meet it with Cody para 101",
      "MAKE THE APPLICATION BEFORE JUDGMENT. Cody para 105: once the judge has determined the action he is no longer competent to adjourn it"
    ]},
  { d: 52, week: 7, drill: true,
    q: "From the bench: Mr Donlon has already made these points. Why am I hearing them a second time?",
    focus: "The answer is one sentence and then you sit into your own ground.",
    covers: [
      "Say you adopt Mr Donlon's submissions and will not repeat them",
      "Identify immediately what is yours and his alone: standing, the adjournment, unfair terms",
      "Do not defend the overlap, remove it",
      "This is why day 38 matters"
    ]},
  { d: 53, week: 7, drill: true,
    q: "From the bench: you have had six years and more than one solicitor. Why is this the first time any of this is being said?",
    focus: "Two sentences on the history, then straight back to law. Do not let this become the case.",
    covers: [
      "This is a rehearing, so the points arise afresh",
      "The standing point could not have been made against a party who was not before the Circuit Court",
      "One short factual sentence on the representation history, no adjectives",
      "Then return immediately to the substance"
    ]},
  { d: 54, week: 7, drill: true,
    q: "From the bench: this is your final appeal. If I refuse you, what happens next?",
    focus: "Know the answer even though you hope not to need it.",
    covers: [
      "There is no further appeal as of right from a Circuit Court appeal determined in the High Court",
      "The route is a certificate on a point of exceptional public importance",
      "The plenary continues separately regardless of what happens here",
      "Say this factually, not as a threat"
    ]},
  { d: 55, week: 7, drill: true,
    q: "The order is going to be made. What do you ask for before the judge rises? List it in order.",
    focus: "Most people lose this bit because they never planned for losing.",
    covers: [
      "A stay, and say for how long and why",
      "Time to remain in the property, with a specific period",
      "Costs, or at least that costs be reserved",
      "Ask calmly and briefly. This is not the moment to reargue anything",
      "Have it written on the back page of your notes"
    ]},
  { d: 56, week: 7, drill: true,
    q: "You are mid sentence and the judge says: I have that point, move on. What do you do, exactly?",
    focus: "Practise this until it is automatic. Most litigants in person get this wrong.",
    covers: [
      "Stop talking immediately, in the middle of the sentence if necessary",
      "Say thank you and move to the next heading",
      "Do not finish the thought, do not repeat it in different words",
      "I have that point usually means he accepts it. Carrying on can lose it again"
    ]},
  { d: 57, week: 7, drill: true,
    q: "Full dress rehearsal. Paul and Liz interrupt you with the questions from days 43 to 56 in any order. Go the whole way through without notes.",
    focus: "Tomorrow is the hearing. One run, no stopping to fix things.",
    covers: [
      "Opening words verbatim",
      "Standing, then adjournment, then unfair terms",
      "Answer every interruption and return to where you were",
      "Whatever is still shaky tonight, leave it. You know enough",
      "Early night. Bag packed before you sleep"
    ]}
];
