module.exports = {
  apps: [
    {
      name: "admin-client",
      script: "npm",
      args: "run start",
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      out_file: "./logs/admin-client-out.log",
      error_file: "./logs/admin-client-error.log",
      log_rotation_max_size: "10M",
      log_rotation_days: 7,
      log_rotation_max_files: 5,
      combine_logs: true,
      time: true,
    },
  ],
};
