updateUser(userData)
.then((result) => {
  toast.success("successfully created account");
  navigate(from, { replace: true });
})
.catch((err) => console.error(err));

