// All page copy lives here. Edit text in this file to change it on the site.
// (Copied verbatim from the design prototype.)

export const TRUST = [['Since 2010', 'Established local painting company'], ['Insured & WorkSafeBC', 'Professional protection, organized crews'], ['Premium coatings', 'Benjamin Moore & Sherwin-Williams'], ['Lower Mainland + Fraser Valley', 'Surrey, Vancouver, Maple Ridge & beyond']].map(([t, d]) => ({ t, d }));

export const SERVICES = [
  ['Exterior painting', 'Siding, stucco, Hardie, fascia, soffits, trim, doors and architectural details.'],
  ['Interior painting', 'Walls, ceilings, trims, doors, baseboards and refined interior finishing.'],
  ['Cabinet painting', 'Professional prep and sprayed finishes for a smooth, modern result.'],
  ['Commercial', 'Organized crews for offices, retail, multi-unit and commercial spaces.'],
  ['Staining', 'Decks, wood features and exterior surfaces with durable stain systems.'],
  ['Specialty coatings', 'Moisture-area coatings, concrete finishes and specialty applications.']
].map(([t, d]) => ({ t, d }));

export const STANDARD = [['Detailed surface preparation', 'Cleaning, sanding, filling, caulking and priming where required.'], ['Spray, brush & roller', 'Application methods selected for the surface and finish.'], ['Residential & commercial', 'From single rooms to larger property transformations.'], ['Premium coating options', 'Benjamin Moore and Sherwin-Williams systems available.']].map(([t, d]) => ({ t, d }));

export const PROCESS = [['Consult', 'We review your property, surfaces, colours, priorities and project goals.'], ['Prepare', 'We protect surrounding areas and prepare the substrate for a dependable finish.'], ['Finish', 'We apply, inspect and refine the work before handing the project back to you.']].map(([t, d]) => ({ t, d }));

export const REVIEWS = [
  { h: 'Exceptional service and outstanding quality.', q: 'From start to finish, Jass and his team were nothing short of amazing. The painting itself was flawless. The attention to detail was impressive, and they completed the job on time, with no mess left behind, just a beautiful, fresh look for my home.', n: 'Tricky Tom', c: 'Google review' },
  { h: 'Great price.', q: 'They were professional, reliable, and paid close attention to detail from start to finish. The team was respectful, hardworking, and made sure the job was completed properly and on time. The finished result looked amazing.', n: 'Amandeep Singh', c: 'Google review' },
  { h: 'Interior painting.', q: 'Jess and his team were outstanding! Always on time and ready to work hard. They were very respectful, professional and hardworking. They did a fabulous job. I would gladly have them do another job for us.', n: 'Don & Karen', c: 'White Rock · Google review' }
];

export const CHIPS = ['Exterior', 'Interior', 'Cabinets', 'Commercial', 'Staining', 'Specialty coating'];
