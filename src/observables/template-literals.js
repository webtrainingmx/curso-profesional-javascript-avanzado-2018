function createTemplateLiteral() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  const protocol = 'https';
  const hostname = 'webtraining.zone';
  const usersAPIURL = `${protocol}://${hostname}/api/v1/users`;

  console.log('usersAPIURL', usersAPIURL);
}

export {createTemplateLiteral};
