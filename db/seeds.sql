INSERT INTO department
  (name)
VALUES
  ('Information Technology'),
  ('Human Resources'),
  ('Finance'),
  ('Marketing');

      INSERT INTO role
  (title, salary, department_id)
VALUES
  ('CEO', 255000, 1),
  ('Manager', 160000, 1),
  ('Senior Engineer', 140000, 1),
  ('Engineer', 120000, 1);

  INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 1, NULL),
  ('Jack', 'London', 2, 1),
  ('Robert', 'Bruce', 2, 1),
  ('Peter', 'Greenaway', 3, 3),
  ('Derek', 'Jarman', 3, 2),
  ('Paolo', 'Pasolini', 4, 2),
  ('Heathcote', 'Williams', 4, 3);







