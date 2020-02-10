export interface Step {
  id: number;
  name: string;
  due: string;
  priority: number;
  relatedGoal: number;
  relatedRisk: number;
}
