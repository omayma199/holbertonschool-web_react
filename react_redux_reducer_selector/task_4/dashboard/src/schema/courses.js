import { schema } from 'normalizr';

// Define a schema entity for courses
const courseSchema = new schema.Entity('courses');

// Create a function to normalize the data with the schema
const coursesNormalizer = (data) => normalize(data, [courseSchema]);

export default coursesNormalizer;
