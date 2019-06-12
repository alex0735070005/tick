import {
  TICK_API_CLIENTS_URL,
  TICK_API_PROJECTS_URL,
  TICK_API_USERS_URL,
  TICK_API_ROLES_URL,
  TICK_API_TASKS_URL,
  TICK_API_ENTRIES_URL,
  API_PREFIX,
} from '../constants/Tick';
import FeathersClient from "../../utils/FeathersClient";

/**
 * Tick service for Api methods
 * https://www.tickspot.com/api
 */
class TickService {

  constructor() {
    this.roles = FeathersClient.service(API_PREFIX + TICK_API_ROLES_URL);
    this.clients = FeathersClient.service(API_PREFIX + TICK_API_CLIENTS_URL);
    this.projects = FeathersClient.service(API_PREFIX + TICK_API_PROJECTS_URL);
    this.tasks = FeathersClient.service(API_PREFIX + TICK_API_TASKS_URL);
    this.users = FeathersClient.service(API_PREFIX + TICK_API_USERS_URL);
    this.entries = FeathersClient.service(API_PREFIX + TICK_API_ENTRIES_URL);
  }

  /**
   * Create auth tick headers from localStorage
   * @returns {*}
   */
  getAuthParams() {
    const tickAuth = JSON.parse(localStorage.getItem('tickAuth'));
    const {
      api_token,
      subscription_id,
      username,
    } = tickAuth;

    return {
      headers: {
        'TickSpot-Authorization': `Token token=${api_token}`,
        'TickSpot-User-Agent': `User-Agent: MyCoolApp (${username})`,
      },
      query: {
        subscriptionId: subscription_id,
      },
    };
  }

  /**
   * Get tick projects display list in track select
   * @returns {*}
   */
  getProjects() {
    return this.projects.find(this.getAuthParams());
  }

   /**
   * Get tick clients display list in track select
   * @returns {*}
   */
  getClients() {
    return this.clients.find(this.getAuthParams());
  }

  /**
   * Get tick users for getting user id param for creative entry time
   * @returns {*}
   */
  getUsers() {
    return this.users.find(this.getAuthParams());
  }

  /**
   * Get tick tasks for display list in track select
   * @param {number} projectId
   * @returns {*}
   */
  getTasks(projectId) {
    const authParams = this.getAuthParams();
    return this.tasks.find({
      headers: authParams.headers,
      query:{
        ...authParams.query,
        projectId,
      },
    });
  }

  /**
   * Get task for display user task status after track time
   * @param {number} taskId
   * @returns {*}
   */
  getTask(taskId) {
    return this.tasks.get(taskId, this.getAuthParams());
  }

  /**
   * Auth tick user by email and password
   * @param {string} username
   * @param {string} password
   * @returns {*}
   */
  auth(username, password) {
     return this.roles.find({
      headers:{
        'TickSpot-Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        'TickSpot-User-Agent': `MyCoolApp(${username})`,
      },
    });
  }

  /**
   * Create entry time
   * @param {object} data
   * @returns {*}
   */
  createEntry(data) {
    return this.entries.create(data, this.getAuthParams());
  }

}

export default new TickService();
