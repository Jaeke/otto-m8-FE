export interface WorkflowNode {
  id: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
    input_type?: string;
    custom_name?: string;
    core_block_type?: string;
    process_type?: string;
  };
  sourcePosition?: string;
  targetPosition?: string;
  deletable?: boolean;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  animated: boolean;
}
