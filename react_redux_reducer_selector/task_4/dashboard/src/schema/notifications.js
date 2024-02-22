import { schema } from 'normalizr';

// Define a schema entity for notifications
const notificationSchema = new schema.Entity('notifications');

// Create a function to normalize the data with the schema
const notificationsNormalizer = (data) => normalize(data, [notificationSchema]);

export default notificationsNormalizer;
