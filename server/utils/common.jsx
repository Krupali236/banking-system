const isInvalidField = (receivedFields, validFieldsToUpdate) => {
    return receivedFields.some(
      (field) => validFieldsToUpdate.indexOf(field) === -1
    );
  };
  const isInvalidFieldProvided = isInvalidField(
    receivedFields,
    validFieldsToUpdate
  );
  if (isInvalidFieldProvided) {
    return res.status(400).send({
      signup_error: 'Invalid field.'
    });
  }