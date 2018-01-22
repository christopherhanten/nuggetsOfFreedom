/**
 * Seed the database
 */
function seedEvents(req, res) {
  // create some events
  const events = [
    { date: 'Jan 22', nugget: 'He that pities another remembers himself.
' },
    { date: 'Jan 23', nugget: 'He that is angry without a cause, must me satisfied without amends.' },
    { date: 'Jan 24', nugget: 'One pair of heels is often worth two pairs of hands.' },
    { date: 'Jan 25', nugget: 'A blind man will not thank you for a looking glass.' }
    { date: 'Jan 26', nugget: 'A gift with a kind countenance is a double present.' },
    { date: 'Jan 27', nugget: 'Be ever at leisure to do good; never make business your excuse to decline the works of humanity.' },
    { date: 'Jan 28', nugget: 'Discontents do arise from our desires oftener than from our needs.' },
    { date: 'Jan 29', nugget: 'Good jests bite like lambs, not like dogs.' }
    { date: 'Jan 30', nugget: 'It is better to decide an argument between enemies than friends; for one friend will certainly become an enemy and one enemy a friend.' },
    { date: 'Feb 1',  nugget: 'He that riseth late, must trot all day, and shall scarce overtake his business at night.' }
  ];

  // use the Event model to insert/save
  for (event of events) {
    var newEvent = new Event(event);
    newEvent.save();
  }

  // seeded!
  res.send('Database seeded!');
}
