export const loadTournaments = () => ({
  type: 'PROMISE',
  actions: [
    'TOURNAMENTS_LOADING_STARTED',
    'TOURNAMENTS_LOADING_FINISHED',
    'TOURNAMENTS_LOADING_FAILED'
  ],
  promise: fetch(
    'https://ws.fanteam.com/match_collections?sport=football&tab=admin_created&statuses[]=waiting&statuses[]=in_progress&statuses[]=pending_confirmation&statuses[]=closed&statuses[]=cancelled&page=0&per_page=30&bearer[white_label]=fanteam'
  )
    .then(res => res.json())
    .catch(error => error)
});
