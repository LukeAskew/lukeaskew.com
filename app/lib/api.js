import contentful from 'contentful';

const client = contentful.createClient({
  space: 'ga0hzqdifbgl',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export function getProfileLinks() {
  return client.getEntries({ content_type: 'profileLink' });
}

export function getWritings() {
  return client.getEntries({ content_type: 'writing', order: '-fields.publishedDate' });
}

export function getSpeakings() {
  return client.getEntries({ content_type: 'speaking', order: '-fields.publishedDate' });
}

export function getProjects() {
  return client.getEntries({ content_type: 'projects' });
}

export function getEntry(type, slug) {
  return client.getEntries({
    'content_type': type,
    'fields.slug': slug,
    'limit': 1,
  });
}
