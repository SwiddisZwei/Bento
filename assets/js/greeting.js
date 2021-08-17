// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘

// Get the hour
const today = new Date();
const hour = today.getHours();

// Get appropriate greeting and update page
let greeting;

if (6 <= hour && hour < 12) {
  greeting = CONFIG.greetingMorning(CONFIG.name);
} else if (12 <= hour && hour < 17) {
  greeting = CONFIG.greetingAfternoon(CONFIG.name);
} else if (18 <= hour && hour < 23) {
  greeting = CONFIG.greetingEvening(CONFIG.name);
} else {
  greeting = CONFIG.greetingNight(CONFIG.name);
}

if (CONFIG.greetingAsPlaceholder) {
  document.getElementById('searchBar').placeholder = greeting;
} else {
  document.getElementById('greetings').innerText = greeting;
}
