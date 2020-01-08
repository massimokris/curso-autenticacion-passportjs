//funcionalidad de prueba para practica de test driven development
function buildMessage(entity, action) {
  if (action === 'list') {
    return `${entity}s ${action}ed`;
  }

  return `${entity} ${action}d`;
}

module.exports = buildMessage;
