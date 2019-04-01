export function addSubmoduleRoutes(parent, subRoutes) {
  for (let path in subRoutes) {
    if (subRoutes.hasOwnProperty(path)) {
      subRoutes[path].forEach(item => {
        if (item.path.substr(0, 1) !== '/') {
          item.path = path + item.path;
        }
        if (item.redirect && item.redirect.substr(0, 1) !== '/') {
          item.redirect = path + item.redirect;
        }
        parent.push(item);
      });
    }
  }
}