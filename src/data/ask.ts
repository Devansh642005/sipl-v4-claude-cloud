/** Plain answers to the questions buyers are afraid to ask. Advice, not promises. */
export const ask = [
  {
    q: "Will possession be delayed?",
    a: "No website can honestly promise a date it does not control. What you can do: read the possession date in the project's RERA registration (UPRERAPRJ827165 on the UP RERA portal), ask us for the current construction schedule in writing, and visit the site to compare the schedule with what you see.",
  },
  {
    q: "Are there hidden charges?",
    a: "Ask for a written cost sheet before you pay anything. It should list the base price, GST, stamp duty and registration, maintenance deposit, parking and club charges. If a line is missing, ask why. We are happy to walk you through ours.",
  },
  {
    q: "Is the project legally approved?",
    a: "Ask to see three things: the RERA registration, the approved map and the title documents. A registered project should be able to show all three. Do the same with any builder you talk to.",
  },
  {
    q: "Can I trust the pictures?",
    a: "Renders are labelled artist's impressions and site photographs are labelled site photographs. Finishes and fittings are confirmed in the agreement's specification schedule, so ask to read it before you book.",
  },
  {
    q: "Which flat should I choose?",
    a: "Start with how many people will live in it and what monthly payment feels comfortable, then compare plans side by side. Our budget planner and floor plans page are built for exactly this.",
    href: "/tools",
    action: "Open the planner",
  },
  {
    q: "Can I get a home loan?",
    a: "Most buyers do. Banks look at your income, credit history and the project's approvals. Test a comfortable payment with the EMI planner, then ask us which paperwork banks usually request.",
    href: "/tools",
    action: "Try the EMI planner",
  },
  {
    q: "I live abroad. Can I buy?",
    a: "NRIs can generally buy residential property in India. The rules on payments and documents change, so confirm the current position with your bank and adviser. Our NRI corner explains how we work with buyers overseas.",
    href: "/nri",
    action: "Read the NRI corner",
  },
  {
    q: "What about maintenance after handover?",
    a: "Ask what the maintenance charge covers, who collects it and how it is accounted for. Get the answer in writing, before you book, not after you move in.",
  },
  {
    q: "Can I change the layout?",
    a: "Once the structure is built, layout changes are usually limited. If you have a specific need, raise it early and ask for the answer in writing.",
  },
  {
    q: "How secure is it?",
    a: "Sri Krishna Vilas is a gated community with 3 tier security and 24x7 power backup. The best check is to see how the gate works when you visit.",
    href: "/amenities",
    action: "See the amenities",
  },
  {
    q: "How do I visit?",
    a: "Pick a day and time and we will confirm. You can also call the helpdesk. Come with your questions, and with the family, because this is a decision for everyone in it.",
    href: "/book-visit",
    action: "Book a site visit",
  },
] as const;

export const stories = [
  {
    who: "The first-time buyer",
    line: "It is a big step, and the paperwork feels like another language.",
    plan: "Often a 1 or 1.5 BHK.",
    advice: [
      "Start with the EMI planner, not the brochure. Decide the monthly payment you can carry comfortably.",
      "Keep a cash buffer for registration, furnishing and the first few months.",
      "Visit twice, once with the family and once alone with your questions.",
    ],
    href: "/tools",
    action: "Plan your budget",
  },
  {
    who: "The growing family",
    line: "More rooms, more safety, and somewhere the children can play.",
    plan: "Often a 2 or 3 BHK.",
    advice: [
      "Look at the play area, the open ground and the gate, not just the flat.",
      "Compare 2 and 3 BHK plans side by side and count the bedrooms you will need in ten years.",
      "Ask how the community is managed after handover.",
    ],
    href: "/floor-plans",
    action: "Compare plans",
  },
  {
    who: "The NRI son buying for his parents",
    line: "You cannot be there every weekend, so you need to see for yourself.",
    plan: "Often a 2 BHK.",
    advice: [
      "Ask for dated site photographs and use the virtual tour to walk the project from wherever you are.",
      "Speak to a lawyer about authorising a trusted person to handle visits and paperwork.",
      "Confirm payment and documentation rules with your bank before you transfer money.",
    ],
    href: "/nri",
    action: "NRI corner",
  },
  {
    who: "The retired couple",
    line: "Quiet mornings, a short walk, and neighbours you feel safe around.",
    plan: "Often a 1.5 or 2 BHK.",
    advice: [
      "Walk the jogging track and the garden at the time of day you would actually use them.",
      "Check the distance from the entrance to the flat, and how you would reach it every day.",
      "Ask what happens in an emergency, and who is on the gate at night.",
    ],
    href: "/book-visit",
    action: "Book a visit",
  },
] as const;
