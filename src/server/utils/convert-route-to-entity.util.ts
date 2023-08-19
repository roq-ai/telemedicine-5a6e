const mapping: Record<string, string> = {
  appointments: 'appointment',
  'medical-records': 'medical_record',
  organizations: 'organization',
  profiles: 'profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
