// CSS class for each status pill. Unlisted statuses get the default style.
export const statusClass = (s?: string) =>
  s === 'Live' ? 'live' : s === 'Running' ? 'running' : s === 'On hold' ? 'hold' : '';
