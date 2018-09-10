import rootUrls from '../fixtures/rootUrls.json'
import rateLimit from '../fixtures/rateLimit.json'
import gantman from '../fixtures/gantman.json'
import skellock from '../fixtures/skellock.json'

export default {
  // Functions return fixtures
  getRoot: () => ({
    ok: true,
    data: rootUrls,
  }),
  getRate: () => ({
    ok: true,
    data: rateLimit,
  }),
  getUser: username => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = gantman
    const skellockData = skellock
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData,
    }
  },
}
